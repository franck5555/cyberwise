export const calculateScore = (correctAnswers: number, totalQuestions: number): number => {
    if (totalQuestions === 0) return 0;
    return Math.round((correctAnswers / totalQuestions) * 100);
};

export const determineLevel = (score: number): string => {
    if (score >= 90) return 'Advanced';
    if (score >= 70) return 'Intermediate';
    return 'Beginner';
};

export const getFeedbackMessage = (score: number): string => {
    if (score >= 90) return 'Excellent work! You have a strong understanding of cybersecurity.';
    if (score >= 70) return 'Good job! You have a solid grasp, but there’s room for improvement.';
    return 'Keep learning! Review the lessons and try again.';
};