const axios = require("axios");
const { punk } = require("../../config");
// beer_name
exports.list = async ({ page = 1, query, per_page = 10 }) => {
  const params = {
    page: Number(page),
    per_page
  };
  if (query) params.beer_name = query;
  console.log(params);
  const { data: beers } = await axios.get(punk.endpoint, {
    params
  });
  console.log(beers);
  return beers;
};
