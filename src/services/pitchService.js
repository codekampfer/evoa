import apiClient from './apiClient';

export const getPitchDetails = async (pitchId) => {
  return await apiClient.get(`/pitch/${pitchId}`);
};

export const getAIAnalysis = async (startupId) => {
  return await apiClient.post(`/pitch/${startupId}/investor-ai`);
};

export const scheduleMeeting = async (startupId, meetingData) => {
  return await apiClient.post(`/pitch/${startupId}/schedule-meeting`, meetingData);
};

export default {
  getPitchDetails,
  getAIAnalysis,
  scheduleMeeting,
};
