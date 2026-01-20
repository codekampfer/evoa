/**
 * API Client Configuration
 * Centralized HTTP client with authentication, error handling, and request/response interceptors
 */

// Get API base URL from environment variable
// If not set, use localhost for development or empty string to show error
let API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

// If API_BASE_URL doesn't end with /api, check if we need to add it
// Note: Swagger docs are at /api, but endpoints might be at root or /api
// Adjust this based on your backend structure
if (API_BASE_URL && !API_BASE_URL.endsWith('/api') && !API_BASE_URL.endsWith('/')) {
  // Uncomment the line below if your backend requires /api prefix
  // API_BASE_URL = API_BASE_URL.endsWith('/') ? API_BASE_URL + 'api' : API_BASE_URL + '/api';
}

// Warn if API URL is not configured
if (!API_BASE_URL) {
  console.warn(
    '⚠️ VITE_API_BASE_URL is not set!\n' +
    'Please create a .env file in the project root with:\n' +
    'VITE_API_BASE_URL=https://evoa-backend.onrender.com\n' +
    'Swagger Docs: https://evoa-backend.onrender.com/api'
  );
} else {
  // Log API configuration for debugging
  console.log('🔗 API Base URL:', API_BASE_URL);
}

/**
 * Get authentication token from localStorage
 */
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

/**
 * Set authentication token in localStorage
 */
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('authToken', token);
  } else {
    localStorage.removeItem('authToken');
  }
};

/**
 * Get stored user data
 */
export const getUserData = () => {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
};

/**
 * Set user data in localStorage
 */
export const setUserData = (userData) => {
  if (userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
  } else {
    localStorage.removeItem('userData');
  }
};

/**
 * Clear all authentication data
 */
export const clearAuthData = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userData');
};

/**
 * Handle API errors
 */
const handleError = (error, response) => {
  if (response) {
    // Server responded with error status
    return {
      error: true,
      status: response.status,
      message: error.message || `HTTP ${response.status}: ${response.statusText}`,
      data: error.data || null,
    };
  } else if (error.request || error.name === 'TypeError') {
    // Network error or DNS resolution failure
    let message = 'Network error: Please check your internet connection';
    
    if (error.message && error.message.includes('ERR_NAME_NOT_RESOLVED')) {
      message = `API server not found. Please check your VITE_API_BASE_URL configuration.\n` +
                `Current API URL: ${API_BASE_URL || 'Not configured'}\n` +
                `Create a .env file with: VITE_API_BASE_URL=your-api-url`;
    } else if (error.message && error.message.includes('Failed to fetch')) {
      message = `Failed to connect to API server.\n` +
                `Current API URL: ${API_BASE_URL || 'Not configured'}\n` +
                `Please ensure the API server is running and VITE_API_BASE_URL is correct.`;
    }
    
    return {
      error: true,
      status: 0,
      message,
      data: null,
    };
  } else {
    // Error in request setup
    return {
      error: true,
      status: 0,
      message: error.message || 'An unexpected error occurred',
      data: null,
    };
  }
};

/**
 * Main API request function
 */
const apiRequest = async (endpoint, options = {}) => {
  const {
    method = 'GET',
    body = null,
    headers = {},
    requiresAuth = true,
    ...restOptions
  } = options;

  // Build request headers
  const requestHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  };

  // Add authentication token if required
  if (requiresAuth) {
    const token = getAuthToken();
    if (token) {
      requestHeaders.Authorization = `Bearer ${token}`;
    }
  }

  // Build request config
  const config = {
    method,
    headers: requestHeaders,
    ...restOptions,
  };

  // Add body for POST, PUT, PATCH requests
  if (body && ['POST', 'PUT', 'PATCH'].includes(method)) {
    config.body = JSON.stringify(body);
  }

  // Check if API URL is configured
  if (!API_BASE_URL) {
    throw {
      error: true,
      status: 0,
      message: 'API base URL is not configured. Please set VITE_API_BASE_URL in your .env file.',
      data: null,
    };
  }

  // Log request details in development mode
  if (import.meta.env.DEV) {
    const logBody = body ? (typeof body === 'string' ? JSON.parse(body) : body) : null;
    console.log('API Request:', {
      method,
      url: `${API_BASE_URL}${endpoint}`,
      headers: requestHeaders,
      body: logBody,
      fullConfig: {
        ...config,
        body: typeof config.body === 'string' ? JSON.parse(config.body) : config.body
      }
    });
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

    // Parse response
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      try {
        data = await response.json();
      } catch (parseError) {
        // If JSON parsing fails, try to get text
        const textData = await response.text();
        data = { message: textData || 'Invalid JSON response', raw: textData };
      }
    } else {
      data = await response.text();
    }

    // Handle non-2xx responses
    if (!response.ok) {
      // Log detailed error for debugging
      console.error('API Error:', {
        status: response.status,
        statusText: response.statusText,
        endpoint: `${API_BASE_URL}${endpoint}`,
        method: method,
        responseData: data,
      });

      // Extract error message from various possible response formats
      let errorMessage = 'Request failed';
      if (data) {
        if (typeof data === 'string') {
          errorMessage = data;
        } else if (data.message) {
          errorMessage = data.message;
        } else if (data.error) {
          errorMessage = typeof data.error === 'string' ? data.error : data.error.message || 'Server error';
        } else if (data.errors && Array.isArray(data.errors)) {
          errorMessage = data.errors.join(', ');
        } else if (data.statusCode && data.message) {
          errorMessage = data.message;
        }
      }

      // Add status-specific messages
      if (response.status === 500) {
        // For 500 errors, try to extract more details
        if (!errorMessage || errorMessage === 'Request failed') {
          // If we couldn't parse a message, show the raw data
          if (data && typeof data === 'object') {
            errorMessage = JSON.stringify(data);
          } else if (data) {
            errorMessage = String(data);
          } else {
            errorMessage = 'Internal server error. Please check the console for details.';
          }
        }
      } else if (response.status === 401) {
        errorMessage = errorMessage || 'Invalid credentials';
      } else if (response.status === 403) {
        errorMessage = errorMessage || 'Access forbidden';
      } else if (response.status === 404) {
        errorMessage = errorMessage || 'Endpoint not found';
      }

      const error = handleError(
        { message: errorMessage, data },
        response
      );
      throw error;
    }

    return {
      error: false,
      status: response.status,
      data,
    };
  } catch (error) {
    // Handle network errors or parsing errors
    if (error.error) {
      throw error; // Re-throw handled errors
    }
    throw handleError(error, null);
  }
};

/**
 * API Client methods
 */
export const apiClient = {
  get: (endpoint, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'GET' }),

  post: (endpoint, body, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'POST', body }),

  put: (endpoint, body, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'PUT', body }),

  patch: (endpoint, body, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'PATCH', body }),

  delete: (endpoint, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'DELETE' }),
};

export default apiClient;
