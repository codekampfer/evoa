/**
 * Notifications Service
 * Handles user notifications management
 */

import apiClient from './apiClient';

/**
 * Get user notifications
 * @param {Object} [params] - Optional parameters
 * @param {string} [params.type] - Filter by type: 'all', 'battleground', 'investor', 'pitch', 'system'
 * @returns {Promise<Object>} Response with notifications list
 */
export const getNotifications = async (params = {}) => {
  try {
    const { type } = params;
    
    let endpoint = '/notifications';
    if (type) {
      endpoint += `?type=${type}`;
    }

    const response = await apiClient.get(endpoint);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Mark notification as read
 * @param {string} notificationId - Notification ID
 * @returns {Promise<Object>} Response confirmation
 */
export const markNotificationAsRead = async (notificationId) => {
  try {
    const response = await apiClient.post(`/notifications/${notificationId}/read`);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Mark all notifications as read
 * @returns {Promise<Object>} Response confirmation
 */
export const markAllNotificationsAsRead = async () => {
  try {
    const response = await apiClient.post('/notifications/read-all');
    return response;
  } catch (error) {
    throw error;
  }
};

export default {
  getNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
};
