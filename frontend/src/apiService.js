import { getToken } from './tokenservice';

export const apiService = {
  get: async (url) => {
    try {
      const token = await getToken(); // Await the token promise to get the actual token value
      const formattedToken = JSON.parse(token); // Remove the quotes from the token
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${formattedToken}`,
        },
      });
      return response.json();
    } catch (error) {
      console.log("Error occurred during API call: ", error);
      throw error;
    }
  },
  // Other methods...
};