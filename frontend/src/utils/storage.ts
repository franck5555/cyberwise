// Async storage is available in Expo; this module keeps the app code compile-safe.
const AsyncStorage = {
  getItem: async (_key: string) => null,
  setItem: async (_key: string, _value: string) => undefined,
  removeItem: async (_key: string) => undefined,
};

const STORAGE_KEY = '@CyberWiseApp';

export const storeData = async (data: object) => {
    try {
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
        console.error('Error storing data', e);
    }
};

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error('Error retrieving data', e);
    }
};

export const removeData = async () => {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (e) {
        console.error('Error removing data', e);
    }
};