import axios from 'axios';
import constants from '../../constants';

const API = axios.create({
  baseURL: `${constants.HOST}/articles`,
});

export const fetchArticles = () => API.get('/');

export const createArticle = (payload) => API.post('/', payload);

export const updateArticle = (name, payload) => API.put(`/${name}`, payload);

export const deleteArticle = (name) => API.delete(`/${name}`);

