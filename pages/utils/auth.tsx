// utils/auth.js
import axios from 'axios';
import Cookies from 'js-cookie';

// const API_URL = 'http://vra.local';

export const generateAndValidateToken = async (username: any, password: any) => {
	try {
		// Generate a token
		const response = await axios.post(`${process.env.API_URL}/wp-json/api/v1/token`, {
			username,
			password,
		});

		if (response.data && response.data.jwt_token) {
			const token = response.data.jwt_token;

			// Store the token in a cookie
			Cookies.set('jwt_token', token);

			// Validate the token
			const validationResponse = await axios.get(`${process.env.API_URL}/wp-json/api/v1/token-validate`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (validationResponse.data && validationResponse.data.status) {
				// Token is valid
				return true;
			} else {
				// Token validation failed
				throw new Error('Token validation failed');
			}
		} else {
			throw new Error('Token not found in response');
		}
	} catch (error) {
		throw new Error(`Error generating and validating token: ${error.message}`);
	}
};
