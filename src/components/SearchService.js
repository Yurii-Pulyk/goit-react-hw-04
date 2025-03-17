import axios from 'axios';
const ACCESS_KEY = 'M4iZ9A992szCpELbG2Wmn8DkGVj4uw_91x_wTCSfSQY';

export async function fetchImages(topic, currentPage) {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query: topic,
      per_page: 5,
      page: currentPage,
      client_id: ACCESS_KEY,
    },
  });
  return response.data.results;
}
