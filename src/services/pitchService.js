/**
 * Pitch Service
 * Handles pitch details and investor-specific features
 */

import apiClient from './apiClient';

/**
 * Get full pitch details
 * @param {string} pitchId - Pitch ID
 * @returns {Promise<Object>} Response with pitch details
 */
export const getPitchDetails = async (pitchId) => {
  try {
    const response = await apiClient.get(`/pitch/${pitchId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Get AI analysis for startup (Investor/Incubator only)
 * @param {string} startupId - Startup ID
 * @returns {Promise<Object>} Response with AI analysis
 */
export const getAIAnalysis = async (startupId) => {
  try {
    const response = await apiClient.post(`/pitch/${startupId}/investor-ai`);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Schedule meeting with founder (Investor/Incubator only)
 * @param {string} startupId - Startup ID
 * @param {Object} meetingData - Meeting data
 * @param {string} [meetingData.notes] - Meeting notes
 * @param {string} meetingData.scheduledAt - Scheduled date/time (ISO 8601 format)
 * @returns {Promise<Object>} Response with created meeting
 */
export const scheduleMeeting = async (startupId, meetingData) => {
  try {
    const response = await apiClient.post(
      `/pitch/${startupId}/schedule-meeting`,
      meetingData
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export default {
  getPitchDetails,
  getAIAnalysis,
  scheduleMeeting,
};
