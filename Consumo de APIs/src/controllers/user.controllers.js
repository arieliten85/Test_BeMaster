const { default: axios } = require("axios");
const { response, request } = require("express");

const getUsersMostPopular = async (req = request, res = response) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL_GIT}/users/google/repos`
    );

    const repos = response.data;

    // Sort the repositories by popularity (number of stars)
    const reposSorted = repos.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );

    res.json(reposSorted);
  } catch (error) {
    console.error("Error al obtener los repositorios:", error.message);
  }
};

module.exports = {
  getUsersMostPopular,
};
