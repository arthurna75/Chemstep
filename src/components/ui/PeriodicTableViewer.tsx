'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import ChemTable from '@/components/ui/ChemTable'
import { ELEMENT_NAMES } from '@/lib/elementNames'

const MIN_SCALE = 1
const MAX_SCALE = 4
const IMAGE_WIDTH = 2145
const IMAGE_HEIGHT = 1795

type Transform = { scale: number; x: number; y: number }
type ViewerTab = 'image' | 'guide'

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

function GuideSection({ emoji, title, children }: { emoji: string; title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span aria-hidden="true">{emoji}</span> {title}
      </h2>
      <div className="text-gray-700 leading-relaxed space-y-3">{children}</div>
    </section>
  )
}

function GuideContent() {
  const elementNameRows = ELEMENT_NAMES.map((e) => [
    String(e.z),
    e.symbol,
    e.nameEn,
    e.nameKo,
    e.atomicWeight || '—',
    e.electronConfig || '—',
    e.ionizationEnergy || '—',
  ])

  return (
    <div className="space-y-6">
      <GuideSection emoji="🔍" title="원소 칸 읽는 법">
        <p>원소 칸 하나는 보통 다음 정보를 담고 있습니다.</p>
        <ChemTable
          headers={['위치', '의미']}
          rows={[
            ['위 숫자', '원자번호 = 양성자 수 = 중성 원자의 전자 수'],
            ['큰 알파벳', '원소기호, 예: C'],
            ['영어 이름', 'Carbon'],
            ['아래 숫자', '상대원자질량, 예: C ≈ 12.011'],
            ['1s² 2s² 2p² 같은 표기', '전자배치, 즉 전자가 어느 궤도함수에 들어 있는지'],
          ]}
        />
        <p className="font-semibold text-gray-900">예: 탄소</p>
        <p className="font-mono font-bold text-gray-900">C / Carbon / 6 / 12.011 / 1s² 2s² 2p²</p>
        <p>
          뜻은 &ldquo;탄소는 원자번호 6번이고 전자 6개가 있으며, 1s에 2개, 2s에 2개, 2p에 2개가 들어 있다&rdquo;는
          의미입니다.
        </p>
        <p className="font-semibold text-gray-900">1s² 2s² 2p²는 이렇게 읽습니다.</p>
        <ChemTable
          headers={['표기', '뜻']}
          rows={[
            ['1, 2, 3', '전자껍질, 에너지 준위'],
            ['s, p, d, f', '오비탈 종류'],
            ['위첨자 ², ⁶', '그 오비탈에 들어 있는 전자 수'],
          ]}
        />
        <p>
          따라서 <span className="font-mono font-bold text-gray-900">1s² 2s² 2p⁶ 3s¹</span>은 &ldquo;1s에 2개, 2s에
          2개, 2p에 6개, 3s에 1개&rdquo;입니다.
        </p>
      </GuideSection>

      <GuideSection emoji="🔬" title="가운데 물리상수 표">
        <p>
          이미지 가운데의 c, h, e, k, N<sub>A</sub>, R 등은 원자·양자·화학 계산에 자주 쓰는 기본 상수입니다.
        </p>
        <ChemTable
          headers={['기호', '이름', '의미']}
          rows={[
            ['c', '빛의 속도', '진공에서 빛이 이동하는 속도'],
            ['h', '플랑크 상수', '에너지와 진동수 관계 E = hf에 쓰임'],
            ['e', '기본 전하량', '양성자 1개의 전하 크기'],
            ['k', '볼츠만 상수', '온도와 입자 에너지 관계'],
            ['NA', '아보가드로 수', '1몰에 들어 있는 입자 수'],
            ['R', '기체상수', '이상기체식 PV = nRT에 사용'],
          ]}
        />
      </GuideSection>

      <GuideSection emoji="📐" title="주기와 족이란?">
        <p>
          <strong className="font-bold text-blue-700">주기(period)</strong>는 주기율표의 가로줄(1~7주기)로, 같은
          주기의 원소들은 전자껍질 수가 같습니다.
        </p>
        <p>
          <strong className="font-bold text-blue-700">족(group)</strong>은 세로줄(1~18족)로, 같은 족의 원소들은
          최외각 전자(원자가전자) 수가 같아서 화학적 성질이 서로 비슷합니다.
        </p>
      </GuideSection>

      <GuideSection emoji="📚" title="용어 미니 사전">
        <ChemTable
          headers={['용어', '뜻']}
          rows={[
            ['원자번호', '원자핵 속 양성자 수. 원소를 구분하는 고유 번호'],
            ['원자량', '원자의 상대적 질량(상대원자질량)'],
            ['전자배치', '전자가 오비탈에 채워진 상태를 나타낸 표기'],
            ['오비탈', '전자가 존재할 확률이 높은 공간, s·p·d·f로 구분'],
            ['전자껍질', '원자핵을 둘러싼 에너지 준위 층(1, 2, 3주기 등)'],
            ['원자가전자', '가장 바깥 전자껍질에 있는 전자, 화학 결합에 관여'],
            ['주기', '주기율표의 가로줄, 전자껍질 수가 같은 원소들의 줄'],
            ['족', '주기율표의 세로줄, 원자가전자 수가 같은 원소들의 줄'],
          ]}
        />
      </GuideSection>

      <GuideSection emoji="🧾" title="원소명 표">
        <p className="text-sm text-gray-500">
          원자량(Standard Atomic Weight), 전자배치(Ground-state Configuration), 이온화 에너지(Ionization Energy,
          eV)는 주기율표 이미지에 표기된 값입니다. 109번 이후 원소는 원본 자료에 전자배치·이온화 에너지 값이 없습니다.
        </p>
        <ChemTable
          headers={['번호', '기호', '영문명', '한글명', '원자량', '전자배치', '이온화 에너지(eV)']}
          rows={elementNameRows}
        />
      </GuideSection>
    </div>
  )
}

export default function PeriodicTableViewer() {
  const [isOpen, setIsOpen] = useState(false)
  const [tab, setTab] = useState<ViewerTab>('image')
  const [transform, setTransform] = useState<Transform>({ scale: 1, x: 0, y: 0 })
  const viewportRef = useRef<HTMLDivElement>(null)
  const pointers = useRef(new Map<number, { x: number; y: number }>())
  const lastPan = useRef({ x: 0, y: 0 })
  const lastPinchDistance = useRef<number | null>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    setTab('image')
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
    if (!isOpen || tab !== 'image' || !node) return
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
  }, [isOpen, tab])

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

            <div className="flex items-center gap-2 border-b border-gray-200 px-4 py-2 pr-14">
              <button
                type="button"
                onClick={() => setTab('image')}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  tab === 'image' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                주기율표
              </button>
              <button
                type="button"
                onClick={() => setTab('guide')}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  tab === 'guide' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                읽는 법
              </button>
            </div>

            {tab === 'image' ? (
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
            ) : (
              <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
                <GuideContent />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
