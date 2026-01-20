/**
 * Reels Service
 * Handles feed system and reel interactions (likes, comments, shares)
 */

import apiClient from './apiClient';

/**
 * Get feed (For You or Following)
 * @param {Object} params - Feed parameters
 * @param {string} params.type - Feed type: 'for_you' or 'following'
 * @param {string} [params.cursor] - Cursor for pagination
 * @param {number} [params.limit] - Number of items to return (default: 20)
 * @returns {Promise<Object>} Response with feed data
 */
export const getFeed = async (params) => {
  try {
    const { type, cursor, limit = 20 } = params;
    
    const queryParams = new URLSearchParams({
      type,
      limit: limit.toString(),
    });
    
    if (cursor) {
      queryParams.append('cursor', cursor);
    }

    const response = await apiClient.get(`/reels?${queryParams.toString()}`);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Like a reel
 * @param {string} reelId - Reel ID
 * @returns {Promise<Object>} Response confirmation
 */
export const likeReel = async (reelId) => {
  try {
    const response = await apiClient.post(`/reels/${reelId}/like`);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Unlike a reel
 * @param {string} reelId - Reel ID
 * @returns {Promise<Object>} Response confirmation
 */
export const unlikeReel = async (reelId) => {
  try {
    const response = await apiClient.delete(`/reels/${reelId}/like`);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Comment on a reel
 * @param {string} reelId - Reel ID
 * @param {Object} commentData - Comment data
 * @param {string} commentData.content - Comment content
 * @param {string} [commentData.parentCommentId] - Parent comment ID for replies
 * @returns {Promise<Object>} Response with created comment
 */
export const commentOnReel = async (reelId, commentData) => {
  try {
    const response = await apiClient.post(`/reels/${reelId}/comment`, commentData);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Get reel comments
 * @param {string} reelId - Reel ID
 * @returns {Promise<Object>} Response with comments list
 */
export const getReelComments = async (reelId) => {
  try {
    const response = await apiClient.get(`/reels/${reelId}/comments`);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Share a reel
 * @param {string} reelId - Reel ID
 * @param {Object} shareData - Share data
 * @param {string} shareData.platform - Platform to share on (e.g., 'twitter', 'facebook', 'linkedin')
 * @returns {Promise<Object>} Response confirmation
 */
export const shareReel = async (reelId, shareData) => {
  try {
    const response = await apiClient.post(`/reels/${reelId}/share`, shareData);
    return response;
  } catch (error) {
    throw error;
  }
};

export default {
  getFeed,
  likeReel,
  unlikeReel,
  commentOnReel,
  getReelComments,
  shareReel,
};
