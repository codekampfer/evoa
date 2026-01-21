import apiClient from './apiClient';

export const search = async (params) => {
  const { q, type } = params;
  const queryParams = new URLSearchParams({ q });
  if (type) queryParams.append('type', type);
  return await apiClient.get(`/search?${queryParams.toString()}`);
};

export const getTrendingHashtags = async () => {
  return await apiClient.get('/hashtags/trending');
};

export const getTopStartups = async () => {
  return await apiClient.get('/startups/top');
};

export const getStartupsOfWeek = async () => {
  return await apiClient.get('/startups/week');
};

export const getInvestorSpotlight = async () => {
  return await apiClient.get('/investors/spotlight');
};

export const getLiveBattleground = async () => {
  return await apiClient.get('/battleground/live');
};

export default {
  search,
  getTrendingHashtags,
  getTopStartups,
  getStartupsOfWeek,
  getInvestorSpotlight,
  getLiveBattleground,
};
