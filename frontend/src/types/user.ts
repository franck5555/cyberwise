export interface User {
  id: string;
  name: string;
  email: string;
  photoUrl?: string;
  createdAt: Date;
  lastLogin: Date;
  emailVerified: boolean;
  learningLevel: string;
  xp: number;
  securityScore: number;
  streakCount: number;
}