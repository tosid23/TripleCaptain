import axios from 'axios';

const fplApi = axios.create({
  baseURL: 'http://localhost:3001' // Replace with your proxy server's URL
});

export const getBootstrapStatic = async () => {
  try {
    const response = await fplApi.get('/api/fpl');
    return response.data;
  } catch (error) {
    console.error('Error fetching FPL data:', error);
    throw error; // Handle the error in your component
  }
};