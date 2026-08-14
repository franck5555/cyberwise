import { useEffect, useState } from 'react';
import { getUserProgress } from '../services/firestoreService';

interface UserProgress {
    lessonsCompleted: string[];
    currentLessonId?: string;
    progressPercent?: number;
}

const useUserProgress = (userId: string) => {
    const [progress, setProgress] = useState<UserProgress | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserProgress = async () => {
            try {
                setLoading(true);
                const progressData = await getUserProgress(userId);
                setProgress(progressData ? {
                    lessonsCompleted: Array.isArray(progressData.lessonsCompleted) ? progressData.lessonsCompleted as string[] : [],
                    currentLessonId: typeof progressData.currentLessonId === 'string' ? progressData.currentLessonId : undefined,
                    progressPercent: typeof progressData.progressPercent === 'number' ? progressData.progressPercent : 0,
                } : null);
            } catch (err) {
                setError('Failed to fetch user progress');
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchUserProgress();
        }
    }, [userId]);

    return { progress, loading, error };
};

export default useUserProgress;