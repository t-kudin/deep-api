const router = require("express").Router();
const { getAllMovies } = require('../controllers/moviesController');


router.get('/movies', getAllMovies);

module.exports = {
  routes: router
}