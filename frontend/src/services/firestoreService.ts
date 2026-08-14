import { firestore } from './firebaseConfig';

interface User { id: string; name: string; email: string; [key: string]: unknown; }
interface Progress { [key: string]: unknown; }
interface QuizResults { [key: string]: unknown; }
interface Scans { [key: string]: unknown; }
interface Rewards { [key: string]: unknown; }
interface NotificationsPrefs { [key: string]: unknown; }

const usersCollection = firestore.collection('users');
const progressCollection = firestore.collection('progress');
const quizResultsCollection = firestore.collection('quizResults');
const scansCollection = firestore.collection('scans');
const rewardsCollection = firestore.collection('rewards');
const notificationsPrefsCollection = firestore.collection('notifications_prefs');

// Function to create or update user data
export const setUserData = async (userId: string, userData: User) => {
    await usersCollection.doc(userId).set(userData, { merge: true });
};

// Function to get user data
export const getUserData = async (userId: string): Promise<User | null> => {
    const userDoc = await usersCollection.doc(userId).get();
    return userDoc.exists ? (userDoc.data() as User) : null;
};

// Function to set user progress
export const setUserProgress = async (userId: string, progressData: Progress) => {
    await progressCollection.doc(userId).set(progressData, { merge: true });
};

// Function to get user progress
export const getUserProgress = async (userId: string): Promise<Progress | null> => {
    const progressDoc = await progressCollection.doc(userId).get();
    return progressDoc.exists ? (progressDoc.data() as Progress) : null;
};

// Function to save quiz results
export const saveQuizResults = async (userId: string, results: QuizResults) => {
    await quizResultsCollection.add({ userId, ...results });
};

// Function to save scan results
export const saveScanResults = async (userId: string, scanData: Scans) => {
    await scansCollection.add({ userId, ...scanData });
};

// Function to set user rewards
export const setUserRewards = async (userId: string, rewardsData: Rewards) => {
    await rewardsCollection.doc(userId).set(rewardsData, { merge: true });
};

// Function to get user rewards
export const getUserRewards = async (userId: string): Promise<Rewards | null> => {
    const rewardsDoc = await rewardsCollection.doc(userId).get();
    return rewardsDoc.exists ? (rewardsDoc.data() as Rewards) : null;
};

// Function to set notification preferences
export const setNotificationPrefs = async (userId: string, prefs: NotificationsPrefs) => {
    await notificationsPrefsCollection.doc(userId).set(prefs, { merge: true });
};

// Function to get notification preferences
export const getNotificationPrefs = async (userId: string): Promise<NotificationsPrefs | null> => {
    const prefsDoc = await notificationsPrefsCollection.doc(userId).get();
    return prefsDoc.exists ? (prefsDoc.data() as NotificationsPrefs) : null;
};