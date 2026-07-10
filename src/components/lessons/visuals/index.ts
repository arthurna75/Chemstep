import type { ComponentType } from 'react'
import Lesson4ElectronConfigVisualsAtomic from './atomic/Lesson4ElectronConfigVisuals'
import Lesson1PeriodicHistoryVisuals from './periodic/Lesson1PeriodicHistoryVisuals'
import Lesson2PeriodGroupVisuals from './periodic/Lesson2PeriodGroupVisuals'
import Lesson3ClassificationVisuals from './periodic/Lesson3ClassificationVisuals'
import Lesson4AtomicRadiusVisuals from './periodic/Lesson4AtomicRadiusVisuals'
import Lesson5IEVisuals from './periodic/Lesson5IEVisuals'
import Lesson1BondFormationVisuals from './bonding/Lesson1BondFormationVisuals'
import Lesson2IonicBondVisuals from './bonding/Lesson2IonicBondVisuals'
import Lesson3CovalentBondVisuals from './bonding/Lesson3CovalentBondVisuals'
import Lesson4PolarityVisuals from './bonding/Lesson4PolarityVisuals'
import Lesson5MetallicBondVisuals from './bonding/Lesson5MetallicBondVisuals'
import Lesson1AtomicMolecularWeightVisuals from './mole/Lesson1AtomicMolecularWeightVisuals'
import Lesson2MoleConceptVisuals from './mole/Lesson2MoleConceptVisuals'
import Lesson3MolarMassVisuals from './mole/Lesson3MolarMassVisuals'
import Lesson4GasMolarVolumeVisuals from './mole/Lesson4GasMolarVolumeVisuals'
import Lesson5CompositionVisuals from './mole/Lesson5CompositionVisuals'
import Lesson1StateSymbolsVisuals from './equations/Lesson1StateSymbolsVisuals'
import Lesson2CoefficientBalancingVisuals from './equations/Lesson2CoefficientBalancingVisuals'
import Lesson3QuantitativeRelationVisuals from './equations/Lesson3QuantitativeRelationVisuals'
import Lesson4ReactionTypesVisuals from './equations/Lesson4ReactionTypesVisuals'
import Lesson5ReactionEnergyVisuals from './equations/Lesson5ReactionEnergyVisuals'
import Lesson1OxidationNumberVisuals from './redox/Lesson1OxidationNumberVisuals'
import Lesson2GalvanicCellVisuals from './redox/Lesson2GalvanicCellVisuals'
import Lesson3SecondaryBatteryVisuals from './redox/Lesson3SecondaryBatteryVisuals'
import Lesson4FuelCellVisuals from './redox/Lesson4FuelCellVisuals'
import Lesson5ElectrolysisVisuals from './redox/Lesson5ElectrolysisVisuals'
import Lesson1HydrocarbonClassificationVisuals from './hydrocarbon/Lesson1HydrocarbonClassificationVisuals'
import Lesson2FractionalDistillationVisuals from './hydrocarbon/Lesson2FractionalDistillationVisuals'
import Lesson3CrackingVisuals from './hydrocarbon/Lesson3CrackingVisuals'
import Lesson4PetrochemicalPolymerVisuals from './hydrocarbon/Lesson4PetrochemicalPolymerVisuals'
import Lesson5PollutionEcoFuelVisuals from './hydrocarbon/Lesson5PollutionEcoFuelVisuals'
import Lesson1EnthalpyHessLawVisuals from './thermo/Lesson1EnthalpyHessLawVisuals'
import Lesson2BondEnergyVisuals from './thermo/Lesson2BondEnergyVisuals'
import Lesson3CombustionStoichiometryVisuals from './thermo/Lesson3CombustionStoichiometryVisuals'
import Lesson4CombustionEfficiencyVisuals from './thermo/Lesson4CombustionEfficiencyVisuals'
import Lesson5CombustionControlVisuals from './thermo/Lesson5CombustionControlVisuals'
import Lesson1BohrComparisonVisuals from './quantum/Lesson1BohrComparisonVisuals'
import Lesson5QuantumNumbersVisuals from './quantum/Lesson5QuantumNumbersVisuals'
import Lesson2OrbitalShapesVisuals from './orbitals/Lesson2OrbitalShapesVisuals'
import Lesson3OrbitalEnergyVisuals from './orbitals/Lesson3OrbitalEnergyVisuals'
import Lesson4ElectronConfigVisuals from './orbitals/Lesson4ElectronConfigVisuals'
import Lesson5PeriodicBondBridgeVisuals from './orbitals/Lesson5PeriodicBondBridgeVisuals'

export const LESSON_VISUALS: Record<string, ComponentType> = {
  // Chapter 1: 원자 구조
  '전자 배치': Lesson4ElectronConfigVisualsAtomic,
  // Chapter 2: 주기율표
  '주기율표의 발전': Lesson1PeriodicHistoryVisuals,
  '주기와 족': Lesson2PeriodGroupVisuals,
  '금속, 비금속, 준금속': Lesson3ClassificationVisuals,
  '원자 반지름의 주기적 변화': Lesson4AtomicRadiusVisuals,
  '이온화 에너지와 전기 음성도': Lesson5IEVisuals,
  // Chapter 3: 화학 결합
  '화학 결합의 형성': Lesson1BondFormationVisuals,
  '이온 결합': Lesson2IonicBondVisuals,
  '공유 결합': Lesson3CovalentBondVisuals,
  '결합의 극성과 분자의 극성': Lesson4PolarityVisuals,
  '금속 결합과 결정 구조': Lesson5MetallicBondVisuals,
  // Chapter 4: 몰과 화학식량
  '원자량과 분자량': Lesson1AtomicMolecularWeightVisuals,
  '몰의 개념 (아보가드로 수)': Lesson2MoleConceptVisuals,
  '몰 질량과 물질의 양': Lesson3MolarMassVisuals,
  '기체의 몰 부피': Lesson4GasMolarVolumeVisuals,
  '화학식량과 조성 백분율': Lesson5CompositionVisuals,
  // Chapter 5: 화학 반응식
  '화학 반응식의 표현': Lesson1StateSymbolsVisuals,
  '화학 반응식 완성 (계수 맞추기)': Lesson2CoefficientBalancingVisuals,
  '반응의 양적 관계 (몰비)': Lesson3QuantitativeRelationVisuals,
  '여러 가지 화학 반응 유형': Lesson4ReactionTypesVisuals,
  '화학 반응에서의 에너지 변화': Lesson5ReactionEnergyVisuals,
  // Chapter 6: 산화-환원과 전기화학
  '산화수와 산화-환원 반응': Lesson1OxidationNumberVisuals,
  '전기화학 전지의 원리': Lesson2GalvanicCellVisuals,
  '이차전지: 충전과 방전': Lesson3SecondaryBatteryVisuals,
  '연료전지: 수소 경제의 핵심': Lesson4FuelCellVisuals,
  '전기분해와 산업 응용': Lesson5ElectrolysisVisuals,
  // Chapter 7: 탄화수소와 석유 정제
  '탄화수소의 분류와 구조': Lesson1HydrocarbonClassificationVisuals,
  '원유의 구성과 분별 증류': Lesson2FractionalDistillationVisuals,
  '크래킹과 접촉 개질': Lesson3CrackingVisuals,
  '석유화학 제품과 고분자': Lesson4PetrochemicalPolymerVisuals,
  '대기 오염과 친환경 연료': Lesson5PollutionEcoFuelVisuals,
  // Chapter 8: 열화학과 연소공학
  '반응 엔탈피와 헤스 법칙': Lesson1EnthalpyHessLawVisuals,
  '결합 에너지와 ΔH': Lesson2BondEnergyVisuals,
  '연소 반응의 화학량론': Lesson3CombustionStoichiometryVisuals,
  '연소 효율과 발열량 계산': Lesson4CombustionEfficiencyVisuals,
  '반응 속도와 연소 제어': Lesson5CombustionControlVisuals,
  // 심화과정 A: 양자역학의 기본 개념 (심화)
  '보어 모형의 한계': Lesson1BohrComparisonVisuals,
  '양자수와 오비탈로 가는 다리': Lesson5QuantumNumbersVisuals,
  // 심화과정 B: 오비탈 (심화)
  's 오비탈과 p 오비탈의 모양': Lesson2OrbitalShapesVisuals,
  'd, f 오비탈과 오비탈의 에너지 준위': Lesson3OrbitalEnergyVisuals,
  '쌓음 원리와 훈트 규칙': Lesson4ElectronConfigVisuals,
  '오비탈에서 주기율표와 화학 결합으로': Lesson5PeriodicBondBridgeVisuals,
}
