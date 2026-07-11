import { getChapterByTitle, getLessonByChapterTitleAndOrder } from '@/lib/data'
import { extractInternalLinkTargets, type LinkMap } from '@/lib/markup'

export async function resolveLinkMap(text: string): Promise<LinkMap> {
  const targets = extractInternalLinkTargets(text)
  const map: LinkMap = new Map()

  await Promise.all(
    targets.map(async target => {
      if (target.startsWith('lesson:')) {
        const rest = target.slice('lesson:'.length)
        const sepIdx = rest.lastIndexOf('/')
        if (sepIdx === -1) {
          map.set(target, null)
          return
        }
        const chapterTitle = rest.slice(0, sepIdx)
        const orderIndex = Number(rest.slice(sepIdx + 1))
        if (!Number.isFinite(orderIndex)) {
          map.set(target, null)
          return
        }
        const result = await getLessonByChapterTitleAndOrder(chapterTitle, orderIndex)
        map.set(target, result ? `/chapters/${result.chapterId}/lessons/${result.lessonId}` : null)
      } else if (target.startsWith('chapter:')) {
        const chapterTitle = target.slice('chapter:'.length)
        const chapter = await getChapterByTitle(chapterTitle)
        map.set(target, chapter ? `/chapters/${chapter.id}` : null)
      }
    })
  )

  return map
}
