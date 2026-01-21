import apiClient from './apiClient';

export const getFeed = async (params) => {
  const { type, cursor, limit = 20 } = params;
  const queryParams = new URLSearchParams({ type, limit: limit.toString() });
  if (cursor) queryParams.append('cursor', cursor);
  return await apiClient.get(`/reels?${queryParams.toString()}`);
};

export const likeReel = async (reelId) => {
  return await apiClient.post(`/reels/${reelId}/like`);
};

export const unlikeReel = async (reelId) => {
  return await apiClient.delete(`/reels/${reelId}/like`);
};

export const commentOnReel = async (reelId, commentData) => {
  return await apiClient.post(`/reels/${reelId}/comment`, commentData);
};

export const getReelComments = async (reelId) => {
  return await apiClient.get(`/reels/${reelId}/comments`);
};

export const shareReel = async (reelId, shareData) => {
  return await apiClient.post(`/reels/${reelId}/share`, shareData);
};

export default {
  getFeed,
  likeReel,
  unlikeReel,
  commentOnReel,
  getReelComments,
  shareReel,
};
