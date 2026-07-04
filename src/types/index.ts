export interface Chapter {
  id: string
  title: string
  description: string | null
  icon: string | null
  order_index: number
  created_at: string
}

export interface Lesson {
  id: string
  chapter_id: string
  title: string
  content: string
  key_formulas: KeyFormula[]
  examples: Example[]
  analogy: string | null
  order_index: number
  created_at: string
}

export interface KeyFormula {
  label: string
  formula: string
  description: string
}

export interface Example {
  problem: string
  solution: string
}

export interface Quiz {
  id: string
  lesson_id: string
  question: string
  explanation: string | null
  order_index: number
  created_at: string
}

export interface QuizOption {
  id: string
  quiz_id: string
  content: string
  is_correct: boolean
  order_index: number
}

export interface UserProgress {
  id: string
  user_id: string
  lesson_id: string
  is_completed: boolean
  completed_at: string | null
  created_at: string
}

export interface UserAnswer {
  id: string
  user_id: string
  quiz_id: string
  selected_option_id: string
  is_correct: boolean
  answered_at: string
}

export interface LessonWithChapter extends Lesson {
  chapters: Pick<Chapter, 'id' | 'title' | 'icon'>
}

export interface QuizWithOptions extends Quiz {
  quiz_options: QuizOption[]
}
