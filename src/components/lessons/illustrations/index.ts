import type { ComponentType } from 'react'
import AtomParticlesDiagram from './AtomParticlesDiagram'
import AtomNotationDiagram from './AtomNotationDiagram'
import IsotopesDiagram from './IsotopesDiagram'
import ElectronConfigDiagram from './ElectronConfigDiagram'
import ValenceElectronDiagram from './ValenceElectronDiagram'
import PeriodGroupDiagram from './PeriodGroupDiagram'
import AtomicRadiusTrendDiagram from './AtomicRadiusTrendDiagram'
import IonizationEnergyDiagram from './IonizationEnergyDiagram'
import PeriodicTableHistoryDiagram from './PeriodicTableHistoryDiagram'
import ElementClassificationDiagram from './ElementClassificationDiagram'
import IonicBondDiagram from './IonicBondDiagram'
import CovalentBondDiagram from './CovalentBondDiagram'
import MolecularPolarityDiagram from './MolecularPolarityDiagram'
import MoleConceptDiagram from './MoleConceptDiagram'
import GasMolarVolumeDiagram from './GasMolarVolumeDiagram'
import ChemEquationDiagram from './ChemEquationDiagram'
import ReactionEnergyDiagram from './ReactionEnergyDiagram'
import DanielCellDiagram from './DanielCellDiagram'
import FuelCellDiagram from './FuelCellDiagram'
import FractionalDistillationDiagram from './FractionalDistillationDiagram'
import HessLawDiagram from './HessLawDiagram'
import CombustionComparisonDiagram from './CombustionComparisonDiagram'

export const LESSON_ILLUSTRATIONS: Record<string, ComponentType> = {
  '원자의 구성 입자': AtomParticlesDiagram,
  '원자 번호와 질량수': AtomNotationDiagram,
  '동위 원소': IsotopesDiagram,
  '전자 배치': ElectronConfigDiagram,
  '원자가 전자와 화학적 성질': ValenceElectronDiagram,
  '주기율표의 발전': PeriodicTableHistoryDiagram,
  '주기와 족': PeriodGroupDiagram,
  '금속, 비금속, 준금속': ElementClassificationDiagram,
  '원자 반지름의 주기적 변화': AtomicRadiusTrendDiagram,
  '이온화 에너지와 전기 음성도': IonizationEnergyDiagram,
  '이온 결합': IonicBondDiagram,
  '공유 결합': CovalentBondDiagram,
  '결합의 극성과 분자의 극성': MolecularPolarityDiagram,
  '몰의 개념 (아보가드로 수)': MoleConceptDiagram,
  '기체의 몰 부피': GasMolarVolumeDiagram,
  '화학 반응식의 표현': ChemEquationDiagram,
  '화학 반응에서의 에너지 변화': ReactionEnergyDiagram,
  // Chapter 6: 산화-환원과 전기화학
  '전기화학 전지의 원리': DanielCellDiagram,
  '연료전지: 수소 경제의 핵심': FuelCellDiagram,
  // Chapter 7: 탄화수소와 석유 정제
  '원유의 구성과 분별 증류': FractionalDistillationDiagram,
  // Chapter 8: 열화학과 연소공학
  '반응 엔탈피와 헤스 법칙': HessLawDiagram,
  '연소 반응의 화학량론': CombustionComparisonDiagram,
}
