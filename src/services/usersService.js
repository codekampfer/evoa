/**
 * Users Service
 * Handles user profile management
 */

import apiClient from './apiClient';

/**
 * Get current user profile
 * @returns {Promise<Object>} Response with user profile data
 */
export const getCurrentUserProfile = async () => {
  try {
    const response = await apiClient.get('/users/me');
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Update current user profile
 * @param {Object} profileData - Profile data to update
 * @param {string} [profileData.fullName] - User full name
 * @param {string} [profileData.bio] - User bio
 * @param {string} [profileData.company] - User company
 * @param {string} [profileData.location] - User location
 * @param {string} [profileData.website] - User website
 * @param {string} [profileData.avatarUrl] - User avatar URL
 * @returns {Promise<Object>} Response with updated profile
 */
export const updateUserProfile = async (profileData) => {
  try {
    const response = await apiClient.patch('/users/me', profileData);
    return response;
  } catch (error) {
    throw error;
  }
};

export default {
  getCurrentUserProfile,
  updateUserProfile,
};
