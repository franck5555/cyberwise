export interface Quiz {
  id: string;
  questionText: string;
  answers: string[];
  correctAnswer: string;
  explanation: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}