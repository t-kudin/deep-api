const router = require("express").Router();
const { getDeliveryMethods } = require("../controllers/deliveryMethodsController");
const { getAllFanlab } = require("../controllers/fanlabController");
const { getAllFanshop } = require("../controllers/fanshopController");
const { getAllMessages } = require("../controllers/messagesController");
const { getAllMovies } = require('../controllers/moviesController');
const { getAllNews } = require('../controllers/newsController');
const { getAllProject } = require("../controllers/projectController");
const { getAllTestMovies } = require("../controllers/testMoviesController");
const { getTransactions } = require("../controllers/transactionsController");
const { getUser } = require("../controllers/userController");

router.get('/movies', getAllMovies);
router.get('/testMovies', getAllTestMovies);
router.get('/news', getAllNews);
router.get('/fanlab', getAllFanlab);
router.get('/fanshop', getAllFanshop);
router.get('/user', getUser);
router.get('/transactions', getTransactions);
router.get('/deliveryMethods', getDeliveryMethods);
router.get('/messages', getAllMessages);
router.get('/project', getAllProject);


module.exports = {
  routes: router
}