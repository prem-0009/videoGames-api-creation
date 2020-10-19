const express = require('express');
const router = express.Router();

let games = require('../models/games')


const {getAllGames} = require('../controllers/gameControllers');
const {getSingleGame} = require('../controllers/gameControllers');
const {createNewGame} = require('../controllers/gameControllers');
const {updateGame} = require('../controllers/gameControllers');
const {deleteGame} = require('../controllers/gameControllers');

router.get('/all-games', getAllGames);

router.get('/single-game/:id', getSingleGame);

router.post('/create-game', createNewGame);

router.put('/update-game/:id', updateGame);

router.delete('/delete-game/:id', deleteGame);


module.exports = router;