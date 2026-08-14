import { User } from '../types/user';

const API_BASE_URL = 'http://localhost:5000/api/v1';

const request = async (path: string, options: RequestInit = {}) => {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
        },
        ...options,
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Request failed');
    }

    return response.json().catch(() => null);
};

export const signUp = async (email: string, password: string): Promise<User | null> => {
    try {
        const payload = await request('/auth/signup', {
            method: 'POST',
            body: JSON.stringify({ name: 'CyberWise User', email, password }),
        });
        return payload?.user ?? null;
    } catch (error) {
        console.error('Error signing up:', error);
        return null;
    }
};

export const login = async (email: string, password: string): Promise<User | null> => {
    try {
        const payload = await request('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });
        return payload?.user ?? null;
    } catch (error) {
        console.error('Error logging in:', error);
        return null;
    }
};

export const logout = async (): Promise<void> => {
    return Promise.resolve();
};

export const resetPassword = async (_email: string): Promise<void> => {
    return Promise.resolve();
};

export const verifyEmail = async (): Promise<void> => {
    return Promise.resolve();
};