'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

const MIN_SCALE = 1
const MAX_SCALE = 4
const IMAGE_WIDTH = 2145
const IMAGE_HEIGHT = 1795

type Transform = { scale: number; x: number; y: number }

function clampScale(scale: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale))
}

// cx/cy는 뷰포트 기준 좌표. 그 지점이 확대/축소 후에도 화면에서 같은 위치에 남도록 x/y를 보정한다.
function zoomedTransform(prev: Transform, cx: number, cy: number, nextScaleRaw: number): Transform {
  const nextScale = clampScale(nextScaleRaw)
  if (nextScale === MIN_SCALE) return { scale: MIN_SCALE, x: 0, y: 0 }
  const ratio = nextScale / prev.scale
  return {
    scale: nextScale,
    x: cx - (cx - prev.x) * ratio,
    y: cy - (cy - prev.y) * ratio,
  }
}

export default function PeriodicTableViewer() {
  const [isOpen, setIsOpen] = useState(false)
  const [transform, setTransform] = useState<Transform>({ scale: 1, x: 0, y: 0 })
  const viewportRef = useRef<HTMLDivElement>(null)
  const pointers = useRef(new Map<number, { x: number; y: number }>())
  const lastPan = useRef({ x: 0, y: 0 })
  const lastPinchDistance = useRef<number | null>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    setTransform({ scale: 1, x: 0, y: 0 })
    pointers.current.clear()
    lastPinchDistance.current = null
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, close])

  useEffect(() => {
    const node = viewportRef.current
    if (!isOpen || !node) return
    // React의 onWheel은 passive 리스너로 등록되어 preventDefault가 무시되므로, 네이티브 리스너를 직접 붙인다.
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const rect = node.getBoundingClientRect()
      const cx = e.clientX - rect.left
      const cy = e.clientY - rect.top
      setTransform((prev) => zoomedTransform(prev, cx, cy, prev.scale * (1 - e.deltaY * 0.0025)))
    }
    node.addEventListener('wheel', onWheel, { passive: false })
    return () => node.removeEventListener('wheel', onWheel)
  }, [isOpen])

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (pointers.current.size === 1) {
      lastPan.current = { x: e.clientX, y: e.clientY }
    } else if (pointers.current.size === 2) {
      const [a, b] = Array.from(pointers.current.values())
      lastPinchDistance.current = Math.hypot(a.x - b.x, a.y - b.y)
    }
  }, [])

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointers.current.has(e.pointerId)) return
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })

    if (pointers.current.size === 1) {
      const dx = e.clientX - lastPan.current.x
      const dy = e.clientY - lastPan.current.y
      lastPan.current = { x: e.clientX, y: e.clientY }
      setTransform((prev) => (prev.scale === MIN_SCALE ? prev : { ...prev, x: prev.x + dx, y: prev.y + dy }))
      return
    }

    if (pointers.current.size === 2) {
      const [a, b] = Array.from(pointers.current.values())
      const distance = Math.hypot(a.x - b.x, a.y - b.y)
      const rect = viewportRef.current?.getBoundingClientRect()
      if (rect && lastPinchDistance.current) {
        const cx = (a.x + b.x) / 2 - rect.left
        const cy = (a.y + b.y) / 2 - rect.top
        const scaleDelta = distance / lastPinchDistance.current
        setTransform((prev) => zoomedTransform(prev, cx, cy, prev.scale * scaleDelta))
      }
      lastPinchDistance.current = distance
    }
  }, [])

  const handlePointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    pointers.current.delete(e.pointerId)
    if (pointers.current.size < 2) lastPinchDistance.current = null
    const remaining = Array.from(pointers.current.values())[0]
    if (remaining) lastPan.current = remaining
  }, [])

  const handleDoubleClick = useCallback(() => {
    setTransform({ scale: MIN_SCALE, x: 0, y: 0 })
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="주기율표 열기"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700"
      >
        <span className="text-2xl" aria-hidden="true">
          🧪
        </span>
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="주기율표"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={close}
        >
          <div
            className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="닫기"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow hover:bg-white"
            >
              ✕
            </button>

            <div
              ref={viewportRef}
              className="flex-1 touch-none overflow-hidden bg-gray-100"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onDoubleClick={handleDoubleClick}
            >
              <div
                className="h-full w-full origin-top-left"
                style={{ transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})` }}
              >
                <Image
                  src="/periodic-table.jpg"
                  alt="주기율표"
                  width={IMAGE_WIDTH}
                  height={IMAGE_HEIGHT}
                  sizes="100vw"
                  draggable={false}
                  className="h-full w-full select-none object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
