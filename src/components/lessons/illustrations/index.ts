import type { ComponentType } from 'react'
import AtomParticlesDiagram from './AtomParticlesDiagram'
import AtomNotationDiagram from './AtomNotationDiagram'
import IsotopesDiagram from './IsotopesDiagram'
import ElectronConfigDiagram from './ElectronConfigDiagram'
import ValenceElectronDiagram from './ValenceElectronDiagram'
import PeriodGroupDiagram from './PeriodGroupDiagram'
import AtomicRadiusTrendDiagram from './AtomicRadiusTrendDiagram'
import IonizationEnergyDiagram from './IonizationEnergyDiagram'

export const LESSON_ILLUSTRATIONS: Record<string, ComponentType> = {
  '원자의 구성 입자': AtomParticlesDiagram,
  '원자 번호와 질량수': AtomNotationDiagram,
  '동위 원소': IsotopesDiagram,
  '전자 배치': ElectronConfigDiagram,
  '원자가 전자와 화학적 성질': ValenceElectronDiagram,
  '주기와 족': PeriodGroupDiagram,
  '원자 반지름의 주기적 변화': AtomicRadiusTrendDiagram,
  '이온화 에너지와 전기 음성도': IonizationEnergyDiagram,
}
