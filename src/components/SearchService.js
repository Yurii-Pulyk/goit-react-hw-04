import axios from 'axios';

const keyApiUnsplash = 'M4iZ9A992szCpELbG2Wmn8DkGVj4uw_91x_wTCSfSQY';

export const fetchPhoto = async (query = 'cat', page) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
      client_id: keyApiUnsplash,
    },
  });
  return response.data.results;
};
