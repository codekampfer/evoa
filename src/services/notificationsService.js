import apiClient from './apiClient';

export const getNotifications = async (params = {}) => {
  const { type } = params;
  const endpoint = type ? `/notifications?type=${type}` : '/notifications';
  return await apiClient.get(endpoint);
};

export const markNotificationAsRead = async (notificationId) => {
  return await apiClient.post(`/notifications/${notificationId}/read`);
};

export const markAllNotificationsAsRead = async () => {
  return await apiClient.post('/notifications/read-all');
};

export default {
  getNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
};
