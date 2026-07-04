import type { ComponentType } from 'react'
import Lesson1PeriodicHistoryVisuals from './periodic/Lesson1PeriodicHistoryVisuals'
import Lesson2PeriodGroupVisuals from './periodic/Lesson2PeriodGroupVisuals'
import Lesson3ClassificationVisuals from './periodic/Lesson3ClassificationVisuals'
import Lesson4AtomicRadiusVisuals from './periodic/Lesson4AtomicRadiusVisuals'
import Lesson5IEVisuals from './periodic/Lesson5IEVisuals'

export const LESSON_VISUALS: Record<string, ComponentType> = {
  '주기율표의 발전': Lesson1PeriodicHistoryVisuals,
  '주기와 족': Lesson2PeriodGroupVisuals,
  '금속, 비금속, 준금속': Lesson3ClassificationVisuals,
  '원자 반지름의 주기적 변화': Lesson4AtomicRadiusVisuals,
  '이온화 에너지와 전기 음성도': Lesson5IEVisuals,
}
