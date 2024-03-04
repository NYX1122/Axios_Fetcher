import axios from 'axios';

export default async function (url, method, { headers, params, data } = {}) {
  try {
    switch (method) {
      case 'GET':
        return await axios.get(url, { headers, params });
      case 'POST':
        return await axios.post(url, data, { headers });
      case 'PUT':
        return await axios.put(url, data, { headers });
      case 'PATCH':
        return await axios.patch(url, data, { headers });
      case 'DELETE':
        return await axios.delete(url, { headers, params });
      default:
        throw new Error('Invalid method');
    }
  } catch (error) {
    console.error('Axios_Fetcher encountered an error: ', error);
    throw error;
  }
}
