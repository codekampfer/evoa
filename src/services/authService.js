import apiClient, { setAuthToken, setUserData, clearAuthData } from './apiClient';

export const USER_ROLES = {
  VIEWER: 'viewer',
  STARTUP: 'startup',
  INVESTOR: 'investor',
  INCUBATOR: 'incubator',
  ADMIN: 'admin',
};

export const VALID_ROLES = Object.values(USER_ROLES);

// Helper to save auth data
const saveAuthData = (response) => {
  if (response.data.token) setAuthToken(response.data.token);
  if (response.data.user) setUserData(response.data.user);
};

export const signup = async (userData) => {
  if (!userData.email || !userData.password || !userData.fullName) {
    throw {
      error: true,
      status: 400,
      message: 'Missing required fields: email, password, and fullName are required',
      data: null,
    };
  }

  const response = await apiClient.post('/auth/signup', userData, { requiresAuth: false });
  saveAuthData(response);
  return response;
};

export const login = async (credentials) => {
  const response = await apiClient.post('/auth/login', credentials, { requiresAuth: false });
  saveAuthData(response);
  return response;
};

export const googleAuth = async (googleData) => {
  const response = await apiClient.post('/auth/google', googleData, { requiresAuth: false });
  saveAuthData(response);
  return response;
};

export const forgotPassword = async (data) => {
  return await apiClient.post('/auth/forgot-password', data, { requiresAuth: false });
};

export const logout = () => {
  clearAuthData();
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

export default {
  signup,
  login,
  googleAuth,
  forgotPassword,
  logout,
  isAuthenticated,
};
