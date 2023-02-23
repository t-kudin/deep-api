const router = require("express").Router();
const { getAllFanlab } = require("../controllers/fanlabController");
const { getAllFanshop } = require("../controllers/fanshopController");
const { getAllMovies } = require('../controllers/moviesController');
const { getAllNews } = require('../controllers/newsController');
const { getAllTestMovies } = require("../controllers/testMoviesController");
const { getUser } = require("../controllers/userController");

router.get('/movies', getAllMovies);
router.get('/testMovies', getAllTestMovies);
router.get('/news', getAllNews);
router.get('/fanlab', getAllFanlab);
router.get('/fanshop', getAllFanshop);
router.get('/user', getUser);

module.exports = {
  routes: router
}