const express = require('express')
const router = express.Router();

const games = require('../models/games')


const {getAllGames} = require('../controllers/gameControllers');
const {getSingleGame} = require('../controllers/gameControllers');
const {CreateNewGame} = require('../controllers/gameControllers');
// const {getAllGames} = require('../controllers/userControllers');
// const {getAllGames} = require('../controllers/userControllers');

router.get('/all-games', getAllGames);

router.get('/single-game/:id', getSingleGame);

router.post('/create-game', CreateNewGame)


module.exports = router;