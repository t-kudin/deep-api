const router = require("express").Router();
const { getAllFanlab } = require("../controllers/fanlabController");
const { getAllMovies } = require('../controllers/moviesController');
const { getAllNews } = require('../controllers/newsController');
const { getAllTestMovies } = require("../controllers/testMoviesController");

router.get('/movies', getAllMovies);
router.get('/testMovies', getAllTestMovies);
router.get('/news', getAllNews);
router.get('/fanlab', getAllFanlab);

module.exports = {
  routes: router
}