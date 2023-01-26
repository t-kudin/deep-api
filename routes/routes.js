const router = require("express").Router();
const { getAllMovies } = require('../controllers/moviesController');
const { getAllNews } = require('../controllers/newsController');

router.get('/movies', getAllMovies);
router.get('/news', getAllNews);

module.exports = {
  routes: router
}