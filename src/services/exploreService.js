/**
 * Explore Service
 * Handles search, trending, and discovery features
 */

import apiClient from './apiClient';

/**
 * Search startups, investors, or hashtags
 * @param {Object} params - Search parameters
 * @param {string} params.q - Search query
 * @param {string} [params.type] - Search type: 'startups', 'investors', or 'hashtags'
 * @returns {Promise<Object>} Response with search results
 */
export const search = async (params) => {
  try {
    const { q, type } = params;
    
    const queryParams = new URLSearchParams({
      q,
    });
    
    if (type) {
      queryParams.append('type', type);
    }

    const response = await apiClient.get(`/search?${queryParams.toString()}`);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Get trending hashtags
 * @returns {Promise<Object>} Response with trending hashtags
 */
export const getTrendingHashtags = async () => {
  try {
    const response = await apiClient.get('/hashtags/trending');
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Get top performing startups
 * @returns {Promise<Object>} Response with top startups
 */
export const getTopStartups = async () => {
  try {
    const response = await apiClient.get('/startups/top');
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Get startups of the week
 * @returns {Promise<Object>} Response with startups of the week
 */
export const getStartupsOfWeek = async () => {
  try {
    const response = await apiClient.get('/startups/week');
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Get investor spotlight
 * @returns {Promise<Object>} Response with investor spotlight data
 */
export const getInvestorSpotlight = async () => {
  try {
    const response = await apiClient.get('/investors/spotlight');
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Get live battleground
 * @returns {Promise<Object>} Response with live battleground data
 */
export const getLiveBattleground = async () => {
  try {
    const response = await apiClient.get('/battleground/live');
    return response;
  } catch (error) {
    throw error;
  }
};

export default {
  search,
  getTrendingHashtags,
  getTopStartups,
  getStartupsOfWeek,
  getInvestorSpotlight,
  getLiveBattleground,
};
