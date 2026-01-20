/**
 * Authentication Service
 * Handles user authentication, registration, and password management
 */

import apiClient, { setAuthToken, setUserData, clearAuthData } from './apiClient';

/**
 * User role enum values
 */
export const USER_ROLES = {
  VIEWER: 'viewer',
  STARTUP: 'startup',
  INVESTOR: 'investor',
  INCUBATOR: 'incubator',
  ADMIN: 'admin',
};

/**
 * Array of all valid user roles
 */
export const VALID_ROLES = Object.values(USER_ROLES);

/**
 * Register a new user
 * @param {Object} userData - User registration data (SignupDto)
 * @param {string} userData.email - User email (required)
 * @param {string} userData.password - User password (required)
 * @param {string} userData.fullName - User full name (required)
 * @param {string} [userData.role] - User role (optional, enum: 'viewer' | 'startup' | 'investor' | 'incubator' | 'admin')
 * @returns {Promise<Object>} Response with user data and token
 * @example
 * await signup({
 *   email: 'user@example.com',
 *   password: 'Password123!',
 *   fullName: 'John Doe',
 *   role: 'viewer'
 * });
 */
export const signup = async (userData) => {
  try {
    // Validate required fields
    if (!userData.email || !userData.password || !userData.fullName) {
      throw {
        error: true,
        status: 400,
        message: 'Missing required fields: email, password, and fullName are required',
        data: null,
      };
    }

    const response = await apiClient.post('/auth/signup', userData, {
      requiresAuth: false,
    });

    if (response.data.token) {
      setAuthToken(response.data.token);
    }
    if (response.data.user) {
      setUserData(response.data.user);
    }

    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Login with email and password
 * @param {Object} credentials - Login credentials
 * @param {string} credentials.email - User email
 * @param {string} credentials.password - User password
 * @returns {Promise<Object>} Response with user data and token
 */
export const login = async (credentials) => {
  try {
    const response = await apiClient.post('/auth/login', credentials, {
      requiresAuth: false,
    });

    if (response.data.token) {
      setAuthToken(response.data.token);
    }
    if (response.data.user) {
      setUserData(response.data.user);
    }

    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Authenticate with Google OAuth
 * @param {Object} googleData - Google authentication data
 * @param {string} googleData.idToken - Google ID token
 * @returns {Promise<Object>} Response with user data and token
 */
export const googleAuth = async (googleData) => {
  try {
    const response = await apiClient.post('/auth/google', googleData, {
      requiresAuth: false,
    });

    if (response.data.token) {
      setAuthToken(response.data.token);
    }
    if (response.data.user) {
      setUserData(response.data.user);
    }

    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Send password reset email
 * @param {Object} data - Password reset data
 * @param {string} data.email - User email
 * @returns {Promise<Object>} Response confirmation
 */
export const forgotPassword = async (data) => {
  try {
    const response = await apiClient.post('/auth/forgot-password', data, {
      requiresAuth: false,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Logout user (clears local storage)
 */
export const logout = () => {
  clearAuthData();
};

/**
 * Check if user is authenticated
 * @returns {boolean} True if user has valid token
 */
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
