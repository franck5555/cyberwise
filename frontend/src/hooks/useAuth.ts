import { useState, useEffect } from 'react';
import { auth } from '../services/firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged, User } from 'firebase/auth';

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signUp = async (email: string, password: string) => {
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setError(null);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Unable to sign up');
        } finally {
            setLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setError(null);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Unable to log in');
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            setError(null);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Unable to log out');
        } finally {
            setLoading(false);
        }
    };

    const resetPassword = async (email: string) => {
        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, email);
            setError(null);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Unable to reset password');
        } finally {
            setLoading(false);
        }
    };

    return {
        user,
        loading,
        error,
        signUp,
        login,
        logout,
        resetPassword,
    };
};

export default useAuth;