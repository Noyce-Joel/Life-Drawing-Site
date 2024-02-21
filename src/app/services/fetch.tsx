import axios from 'axios';

const getAllEvents = () => {
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3001';
  return axios.get(`${baseUrl}/api/events`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export default { getAllEvents }