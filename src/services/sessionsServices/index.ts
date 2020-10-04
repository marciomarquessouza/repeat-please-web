export const TOKEN_KEY = '@repeat-please-token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setToken = (token: string) =>
	localStorage.setItem(TOKEN_KEY, token);

export const removeToken = () => {
	localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => !!getToken();
