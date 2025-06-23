export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  created_at: string;
}

export interface JobRole {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Question {
  id: string;
  role_id: string;
  question: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  keywords: string[];
}

export interface InterviewSession {
  id: string;
  user_id: string;
  role_id: string;
  questions: Question[];
  answers: Answer[];
  score: number;
  feedback: string;
  created_at: string;
  completed: boolean;
}

export interface Answer {
  question_id: string;
  response: string;
  audio_url?: string;
  video_url?: string;
  score: number;
  feedback: string;
}

export interface Theme {
  isDark: boolean;
  toggle: () => void;
}