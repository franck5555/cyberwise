interface Lesson {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  level: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
}