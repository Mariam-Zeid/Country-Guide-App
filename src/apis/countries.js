import axios from "axios";

export const getAllCountries = () =>
  axios.get(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,region,flags"
  );

export const getRegionCountries = (region) =>
  axios.get(`https://restcountries.com/v3.1/region/${region}`);


export const getCountry = (name) =>
  axios.get(`https://restcountries.com/v3.1/name/${name}`);