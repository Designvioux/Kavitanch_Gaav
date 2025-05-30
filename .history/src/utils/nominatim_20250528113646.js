import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const BASE_URL = 'https://api.countrystatecity.in/v1';

const headers = {
  'X-CSCAPI-KEY': API_KEY
};

export const getCountries = () => {
  return axios.get(`${BASE_URL}/countries`, { headers });
};

export const getStates = (countryCode) => {
  return axios.get(`${BASE_URL}/countries/${countryCode}/states`, { headers });
};

export const getCities = (countryCode, stateCode) => {
  return axios.get(`${BASE_URL}/countries/${countryCode}/states/${stateCode}/cities`, { headers });
};
