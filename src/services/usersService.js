import apiClient from './apiClient';

export const getCurrentUserProfile = async () => {
  return await apiClient.get('/users/me');
};

export const updateUserProfile = async (profileData) => {
  return await apiClient.patch('/users/me', profileData);
};

export default {
  getCurrentUserProfile,
  updateUserProfile,
};
