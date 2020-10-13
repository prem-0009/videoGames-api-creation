const games = require('../models/games');

module.exports = {
    getAllGames: (req, res) => {
        return res.status(200).json({confirmation: 'success', games})
    }
}