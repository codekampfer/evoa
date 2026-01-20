/**
 * Meetings Service
 * Handles investor-founder meeting scheduling and management
 */

import apiClient from './apiClient';

/**
 * Get user meetings
 * @returns {Promise<Object>} Response with user meetings list
 */
export const getMeetings = async () => {
  try {
    const response = await apiClient.get('/meetings');
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Accept meeting request (Founder only)
 * @param {string} meetingId - Meeting ID
 * @returns {Promise<Object>} Response confirmation
 */
export const acceptMeeting = async (meetingId) => {
  try {
    const response = await apiClient.post(`/meetings/${meetingId}/accept`);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Reject meeting request (Founder only)
 * @param {string} meetingId - Meeting ID
 * @returns {Promise<Object>} Response confirmation
 */
export const rejectMeeting = async (meetingId) => {
  try {
    const response = await apiClient.post(`/meetings/${meetingId}/reject`);
    return response;
  } catch (error) {
    throw error;
  }
};

export default {
  getMeetings,
  acceptMeeting,
  rejectMeeting,
};
