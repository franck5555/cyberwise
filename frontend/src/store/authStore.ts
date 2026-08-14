import create from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: any; // Replace 'any' with a specific user type if available
  login: (userData: any) => void; // Replace 'any' with a specific user data type
  logout: () => void;
  setUser: (userData: any) => void; // Replace 'any' with a specific user data type
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (userData) => set({ isAuthenticated: true, user: userData }),
  logout: () => set({ isAuthenticated: false, user: null }),
  setUser: (userData) => set({ user: userData }),
}));

export default useAuthStore;