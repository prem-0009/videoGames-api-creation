let games = require('../models/games');

module.exports = {
    getAllGames: (req, res) => {
        if(games.length === 0){
            return res.status(400).json({message: 'no games found'})
        }
        return res.status(200).json({confirmation: 'success', games})
    },

    getSingleGame: (req, res) => {
        let foundSingleGame = games.filter((game) => {
            if (game.id === req.params.id){
                return res.status(200).json({confirmation:'success',game})
            }
        })

        if (!foundSingleGame.length) 
        return res.status(400).json({ message: 'game was not found'});
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
    }, 

    updateGame: (req, res) => {
        let updatedGame = req.body;

        let changed = 1;
        games.forEach((foundGame) => {
            if(foundGame.id === req.params.id && 
               foundGame.name === updatedGame.name && 
               foundGame.description === updatedGame.description &&
               foundGame.yearRelease === updatedGame.yearRelease && 
               foundGame.playtime === updatedGame.playtime){
                 changed *= 1;
            } else {
                 changed *= 0;
            }
        })

        if (changed === 1){
            return res.status(400).json({message: 'nothing was changed'})
        }
        if (changed === 0) {
          games.forEach((foundGame) => {
            if (foundGame.id === req.params.id){
                foundGame.name = updatedGame.name ? updatedGame.name : foundGame.name;
                foundGame.description = updatedGame.description ? updatedGame.description : foundGame.description;
                foundGame.yearRelease = updatedGame.yearRelease ? updatedGame. yearRelease : foundGame.yearRelease;
                foundGame.playtime = updatedGame.playtime ? updatedGame.playtime : foundGame.playtime;
            } 
          });
          
          return res.status(200).json({confirmation: 'updated',changed, games})
        }
        
    },

    deleteGame: (req, res) => {
       
        let newArrayWithDeletedGame = games.filter((game) =>{
            return game.id !==req.params.id;
        })
        let toBeDeleted = games.filter((game) => {
            return game.id === req.params.id
        })
        if (toBeDeleted.length === 0){
            return res.status(400).json({message: 'nothing was deleted'})
        }


         games = newArrayWithDeletedGame;
        return res.status(200).json({confirmation:'success', games})
       
    }

}