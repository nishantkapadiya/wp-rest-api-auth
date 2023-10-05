
// utils/auth.js
import axios from 'axios';

const getToken = async () => {
  try {
    const response = await axios.post('http://vra.local/wp-json/api/v1/token', {
      username: 'vra',
      password: 'this.admin',
    });

    return response.data.jwt_token; // Assuming the token is returned in the response.
  } catch (error) {
    console.error('Error getting token:', error);
    throw error;
  }
};

export default getToken;
