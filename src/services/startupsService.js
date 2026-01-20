/**
 * Startups Service
 * Handles startup management and following functionality
 */

import apiClient from './apiClient';

/**
 * Get startup details
 * @param {string} startupId - Startup ID
 * @returns {Promise<Object>} Response with startup details
 */
export const getStartupDetails = async (startupId) => {
  try {
    const response = await apiClient.get(`/startups/${startupId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Follow a startup
 * @param {string} startupId - Startup ID
 * @returns {Promise<Object>} Response confirmation
 */
export const followStartup = async (startupId) => {
  try {
    const response = await apiClient.post(`/startups/${startupId}/follow`);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Unfollow a startup
 * @param {string} startupId - Startup ID
 * @returns {Promise<Object>} Response confirmation
 */
export const unfollowStartup = async (startupId) => {
  try {
    const response = await apiClient.delete(`/startups/${startupId}/follow`);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Get followed startups
 * @returns {Promise<Object>} Response with followed startups list
 */
export const getFollowedStartups = async () => {
  try {
    const response = await apiClient.get('/startups/following/me');
    return response;
  } catch (error) {
    throw error;
  }
};

export default {
  getStartupDetails,
  followStartup,
  unfollowStartup,
  getFollowedStartups,
};
