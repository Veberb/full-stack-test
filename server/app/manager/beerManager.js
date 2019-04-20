const axios = require("axios");
const { punk } = require("../../config");
// beer_name
exports.list = async ({ page = 1, beer_name, per_page = 10 }) => {
  const params = {
    page: Number(page),
    per_page
  };
  if (beer_name) params.beer_name = beer_name;

  const { data: beers } = await axios.get(punk.endpoint, {
    params
  });

  return beers;
};
