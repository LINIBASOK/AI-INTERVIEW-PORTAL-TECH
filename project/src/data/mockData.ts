import { JobRole, Question, InterviewSession } from '../types';

export const jobRoles: JobRole[] = [
  {
    id: '1',
    name: 'React Developer',
    description: 'Frontend development with React, hooks, and modern JS',
    icon: 'Code2',
    color: 'bg-blue-500',
  },
  {
    id: '2',
    name: 'QA Engineer',
    description: 'Quality assurance, testing, and automation',
    icon: 'Bug',
    color: 'bg-green-500',
  },
  {
    id: '3',
    name: 'Java Developer',
    description: 'Backend development with Java, Spring, and microservices',
    icon: 'Coffee',
    color: 'bg-orange-500',
  },
  {
    id: '4',
    name: 'DevOps Engineer',
    description: 'Infrastructure, CI/CD, and cloud technologies',
    icon: 'Server',
    color: 'bg-purple-500',
  },
  {
    id: '5',
    name: 'Data Scientist',
    description: 'Machine learning, analytics, and data processing',
    icon: 'BarChart3',
    color: 'bg-pink-500',
  },
  {
    id: '6',
    name: 'Product Manager',
    description: 'Product strategy, roadmaps, and stakeholder management',
    icon: 'Users',
    color: 'bg-indigo-500',
  },
];

export const questions: Question[] = [
  // React Developer Questions
  {
    id: '1',
    role_id: '1',
    question: 'What are React hooks and how do they differ from class components?',
    category: 'React Fundamentals',
    difficulty: 'medium',
    keywords: ['hooks', 'useState', 'useEffect', 'class components', 'functional components'],
  },
  {
    id: '2',
    role_id: '1',
    question: 'Explain the concept of virtual DOM and how React uses it for performance optimization.',
    category: 'React Internals',
    difficulty: 'medium',
    keywords: ['virtual DOM', 'reconciliation', 'performance', 'diffing', 'rendering'],
  },
  {
    id: '3',
    role_id: '1',
    question: 'How would you optimize a React application for better performance?',
    category: 'Performance',
    difficulty: 'hard',
    keywords: ['memoization', 'lazy loading', 'code splitting', 'useMemo', 'useCallback'],
  },
  // QA Engineer Questions
  {
    id: '4',
    role_id: '2',
    question: 'What is the difference between unit testing, integration testing, and end-to-end testing?',
    category: 'Testing Types',
    difficulty: 'easy',
    keywords: ['unit testing', 'integration testing', 'e2e testing', 'test pyramid'],
  },
  {
    id: '5',
    role_id: '2',
    question: 'How do you design test cases for a login functionality?',
    category: 'Test Design',
    difficulty: 'medium',
    keywords: ['test cases', 'boundary testing', 'negative testing', 'security testing'],
  },
  // Java Developer Questions
  {
    id: '6',
    role_id: '3',
    question: 'Explain the difference between ArrayList and LinkedList in Java.',
    category: 'Data Structures',
    difficulty: 'easy',
    keywords: ['ArrayList', 'LinkedList', 'performance', 'memory', 'operations'],
  },
  {
    id: '7',
    role_id: '3',
    question: 'What is the Spring Framework and what are its core features?',
    category: 'Spring Framework',
    difficulty: 'medium',
    keywords: ['Spring', 'dependency injection', 'IoC', 'AOP', 'Spring Boot'],
  },
];

export const mockSessions: InterviewSession[] = [
  {
    id: '1',
    user_id: '1',
    role_id: '1',
    questions: questions.filter(q => q.role_id === '1').slice(0, 3),
    answers: [],
    score: 85,
    feedback: 'Great understanding of React concepts. Work on performance optimization techniques.',
    created_at: '2024-01-15T10:30:00Z',
    completed: true,
  },
  {
    id: '2',
    user_id: '1',
    role_id: '2',
    questions: questions.filter(q => q.role_id === '2').slice(0, 2),
    answers: [],
    score: 78,
    feedback: 'Good testing knowledge. Consider learning more about automation frameworks.',
    created_at: '2024-01-14T14:15:00Z',
    completed: true,
  },
];