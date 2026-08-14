export const validateEmail = (email: string): boolean => {
    return /.+@.+\..+/.test(email);
};

export const validatePassword = (password: string): boolean => {
    return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password);
};

export const validateUsername = (username: string): boolean => {
    return username.length >= 3 && username.length <= 20;
};

export const validateSecurityAnswer = (answer: string): boolean => {
    return answer.length >= 2 && answer.length <= 100;
};