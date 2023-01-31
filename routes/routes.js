const router = require("express").Router();
const { getAllMovies } = require('../controllers/moviesController');
const { getAllNews } = require('../controllers/newsController');
const { getAllTestMovies } = require("../controllers/testMoviesController");

router.get('/movies', getAllMovies);
router.get('/testMovies', getAllTestMovies);
router.get('/news', getAllNews);

module.exports = {
  routes: router
}