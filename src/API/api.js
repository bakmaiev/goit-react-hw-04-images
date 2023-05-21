import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34958715-9ce4ce8564d7b2e391d81a960';

const options = {
  per_page: 12,
  totalImages: null,
};

export const fetchCard = async (imageName, page) => {
  try {
    return axios.get(`${BASE_URL}`, {
      params: {
        key: API_KEY,
        q: imageName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page,
        per_page: options.per_page,
      },
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const hasMoreImages = (page, total) => {
  return page < Math.ceil(total / options.per_page);
};
