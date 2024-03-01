import axios from 'axios';

export default async function (method, url, data = null) {
  try {
    let dataToReturn;
    switch (method) {
      case 'get':
        dataToReturn = !data
          ? await axios.get(url)
          : await axios.get(url, data);
        break;
      case 'post':
        dataToReturn = !data
          ? await axios.post(url)
          : await axios.post(url, data);
        break;
      case 'put':
        dataToReturn = !data
          ? await axios.put(url)
          : await axios.put(url, data);
        break;
      case 'delete':
        dataToReturn = !data
          ? await axios.delete(url)
          : await axios.delete(url, data);
        break;
      default:
        throw new Error('Invalid method');
    }
    console.log('Axios_Fetcher successfully fetched data: ', dataToReturn.data);
    return dataToReturn.data;
  } catch (error) {
    console.error('Axios_Fetcher encountered an error: ', error);
    throw error;
  }
}
