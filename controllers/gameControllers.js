const games = require('../models/games');

module.exports = {
    getAllGames: (req, res) => {
        if(games.length === 0){return res.status(400).json({message: 'no games found'})}

        return res.status(200).json({confirmation: 'success', games})

    },

    getSingleGame: (req, res) => {
        let foundSingleGame = games.filter((game) => {
            if (game.id === req.param.id){
                return res.status(200).json({confirmation:'success',game})

            }
        })

        if (!foundSingleGame.length) return res.status(400).json({message: 'game was not found'});
    },
    
    createNewGame :(req, res) => {
        if ( !req.body.name || !req.body.description ){
            res.status(400).json({confirmation: 'fail', message: 'game was not created'})
        }
        
        let newGame = {};
        newGame.id = String(games.length+1);
        newGame.name = req.body.name;
        newGame.description = req.body.description;
        newGame.yearRelease = req.body.yearRelease;
        newGame.playtime = req.body.playtime;

        games.push(newGame)

        return res.status(200).json({confirmation: 'success', newGame})
    }
}