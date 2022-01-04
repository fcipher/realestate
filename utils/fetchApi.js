import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'fa08b5f7fdmsh8a16cdaa2181ecdp1b4103jsn6e53a61222cc',
    },
  });

  return data;
};
