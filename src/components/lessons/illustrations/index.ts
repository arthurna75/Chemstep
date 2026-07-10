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
import BondTypesOverviewDiagram from './BondTypesOverviewDiagram'
import MetallicBondDiagram from './MetallicBondDiagram'
import MoleConceptDiagram from './MoleConceptDiagram'
import GasMolarVolumeDiagram from './GasMolarVolumeDiagram'
import AtomicMolecularWeightDiagram from './AtomicMolecularWeightDiagram'
import MolarMassDiagram from './MolarMassDiagram'
import EmpiricalMolecularFormulaDiagram from './EmpiricalMolecularFormulaDiagram'
import ChemEquationDiagram from './ChemEquationDiagram'
import ReactionEnergyDiagram from './ReactionEnergyDiagram'
import CoefficientBalancingDiagram from './CoefficientBalancingDiagram'
import LimitingReactantDiagram from './LimitingReactantDiagram'
import ReactionTypesDiagram from './ReactionTypesDiagram'
import DanielCellDiagram from './DanielCellDiagram'
import FuelCellDiagram from './FuelCellDiagram'
import RedoxElectronTransferDiagram from './RedoxElectronTransferDiagram'
import SecondaryBatteryDiagram from './SecondaryBatteryDiagram'
import ElectrolysisDiagram from './ElectrolysisDiagram'
import FractionalDistillationDiagram from './FractionalDistillationDiagram'
import HydrocarbonStructureDiagram from './HydrocarbonStructureDiagram'
import CrackingProcessDiagram from './CrackingProcessDiagram'
import AdditionPolymerizationDiagram from './AdditionPolymerizationDiagram'
import CarbonNeutralCycleDiagram from './CarbonNeutralCycleDiagram'
import HessLawDiagram from './HessLawDiagram'
import CombustionComparisonDiagram from './CombustionComparisonDiagram'
import BondEnergyDiagram from './BondEnergyDiagram'
import CombustionEfficiencyDiagram from './CombustionEfficiencyDiagram'
import FireTriangleDiagram from './FireTriangleDiagram'
import BohrLimitationDiagram from './BohrLimitationDiagram'
import WaveParticleDualityDiagram from './WaveParticleDualityDiagram'
import UncertaintyPrincipleDiagram from './UncertaintyPrincipleDiagram'
import WaveFunctionDiagram from './WaveFunctionDiagram'
import QuantumNumbersDiagram from './QuantumNumbersDiagram'
import ElectronCloudDiagram from './ElectronCloudDiagram'
import SPOrbitalShapeDiagram from './SPOrbitalShapeDiagram'
import OrbitalEnergyLevelDiagram from './OrbitalEnergyLevelDiagram'
import AufbauHundDiagram from './AufbauHundDiagram'
import OrbitalPeriodicBridgeDiagram from './OrbitalPeriodicBridgeDiagram'

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
  // Chapter 3: 화학 결합
  '화학 결합의 형성': BondTypesOverviewDiagram,
  '이온 결합': IonicBondDiagram,
  '공유 결합': CovalentBondDiagram,
  '결합의 극성과 분자의 극성': MolecularPolarityDiagram,
  '금속 결합과 결정 구조': MetallicBondDiagram,
  // Chapter 4: 몰과 화학식량
  '원자량과 분자량': AtomicMolecularWeightDiagram,
  '몰의 개념 (아보가드로 수)': MoleConceptDiagram,
  '몰 질량과 물질의 양': MolarMassDiagram,
  '기체의 몰 부피': GasMolarVolumeDiagram,
  '화학식량과 조성 백분율': EmpiricalMolecularFormulaDiagram,
  // Chapter 5: 화학 반응식
  '화학 반응식의 표현': ChemEquationDiagram,
  '화학 반응식 완성 (계수 맞추기)': CoefficientBalancingDiagram,
  '반응의 양적 관계 (몰비)': LimitingReactantDiagram,
  '여러 가지 화학 반응 유형': ReactionTypesDiagram,
  '화학 반응에서의 에너지 변화': ReactionEnergyDiagram,
  // Chapter 6: 산화-환원과 전기화학
  '산화수와 산화-환원 반응': RedoxElectronTransferDiagram,
  '전기화학 전지의 원리': DanielCellDiagram,
  '이차전지: 충전과 방전': SecondaryBatteryDiagram,
  '연료전지: 수소 경제의 핵심': FuelCellDiagram,
  '전기분해와 산업 응용': ElectrolysisDiagram,
  // Chapter 7: 탄화수소와 석유 정제
  '탄화수소의 분류와 구조': HydrocarbonStructureDiagram,
  '원유의 구성과 분별 증류': FractionalDistillationDiagram,
  '크래킹과 접촉 개질': CrackingProcessDiagram,
  '석유화학 제품과 고분자': AdditionPolymerizationDiagram,
  '대기 오염과 친환경 연료': CarbonNeutralCycleDiagram,
  // Chapter 8: 열화학과 연소공학
  '반응 엔탈피와 헤스 법칙': HessLawDiagram,
  '결합 에너지와 ΔH': BondEnergyDiagram,
  '연소 반응의 화학량론': CombustionComparisonDiagram,
  '연소 효율과 발열량 계산': CombustionEfficiencyDiagram,
  '반응 속도와 연소 제어': FireTriangleDiagram,
  // 심화과정 A: 양자역학의 기본 개념 (심화)
  '보어 모형의 한계': BohrLimitationDiagram,
  '빛과 전자의 이중성': WaveParticleDualityDiagram,
  '하이젠베르크 불확정성 원리': UncertaintyPrincipleDiagram,
  '슈뢰딩거 방정식과 파동함수': WaveFunctionDiagram,
  '양자수와 오비탈로 가는 다리': QuantumNumbersDiagram,
  // 심화과정 B: 오비탈 (심화)
  '전자 구름 모형과 오비탈': ElectronCloudDiagram,
  's 오비탈과 p 오비탈의 모양': SPOrbitalShapeDiagram,
  'd, f 오비탈과 오비탈의 에너지 준위': OrbitalEnergyLevelDiagram,
  '쌓음 원리와 훈트 규칙': AufbauHundDiagram,
  '오비탈에서 주기율표와 화학 결합으로': OrbitalPeriodicBridgeDiagram,
}
