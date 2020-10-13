const express = require('express')
const router = express.Router();

const games = require('../models/games')


const {getAllGames} = require('../controllers/userControllers');

router.get('/all-games', getAllGames);
