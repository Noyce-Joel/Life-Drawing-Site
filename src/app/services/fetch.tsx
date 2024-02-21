import axios from 'axios';
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';
const getAllEvents = () => {
  
  return axios.get(`${baseUrl}/api/events`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export default { getAllEvents }