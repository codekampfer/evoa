import apiClient from './apiClient';

export const getMeetings = async () => {
  return await apiClient.get('/meetings');
};

export const acceptMeeting = async (meetingId) => {
  return await apiClient.post(`/meetings/${meetingId}/accept`);
};

export const rejectMeeting = async (meetingId) => {
  return await apiClient.post(`/meetings/${meetingId}/reject`);
};

export default {
  getMeetings,
  acceptMeeting,
  rejectMeeting,
};
