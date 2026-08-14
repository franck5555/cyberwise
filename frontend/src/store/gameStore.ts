import create from 'zustand';

interface GameState {
  quizScore: number;
  achievements: string[];
  increaseScore: (amount: number) => void;
  addAchievement: (achievement: string) => void;
  resetGame: () => void;
}

const useGameStore = create<GameState>((set) => ({
  quizScore: 0,
  achievements: [],
  increaseScore: (amount) => set((state) => ({ quizScore: state.quizScore + amount })),
  addAchievement: (achievement) => set((state) => ({ achievements: [...state.achievements, achievement] })),
  resetGame: () => set({ quizScore: 0, achievements: [] }),
}));

export default useGameStore;