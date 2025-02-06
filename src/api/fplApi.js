import axios from 'axios';

const FPL_API_BOOTSTRAP_STATIC_URL = process.env.REACT_APP_FPL_API_URL || 'http://localhost:3001/api/bootstrap-static'; // Use environment variable or default

const fplApi = axios.create({
  baseURL: FPL_API_BOOTSTRAP_STATIC_URL
});

// Add an interceptor to handle errors globally
fplApi.interceptors.response.use(
  response => response,
  error => {
    console.error('FPL API Error:', error);
    // Optionally, you can handle specific error codes here, e.g.,
    // if (error.response && error.response.status === 404) { ... }

    // Optionally, re-throw the error to be caught by the calling function
    return Promise.reject(error); 
  }
);

export const getBootstrapStatic = async () => {
  try {
    const response = await fplApi.get(''); // No need to append '/api/fpl' as it's in the baseURL
    return response.data;
  } catch (error) {
    console.error('Error fetching FPL data:', error);  // This will now log after the interceptor
    throw error; // Re-throw the error for component-level handling
  }
};

// Example of another API call
export const getPlayerDetails = async (playerId) => {
  try {
    const response = await fplApi.get(`/${playerId}`); // Example using a dynamic player ID
    return response.data;
  } catch (error) {
    console.error(`Error fetching player details for ID ${playerId}:`, error);
    throw error;
  }
};


