/*
Controllers handle the business logic for each. Business logic refers to the operations 
and decisions applied to the data, such as retrieving records, validating inputs, and 
enforcing rules before sending responses to the client. 
In this case, it manages how game data is fetched, processed, or modified based on requests. endpoint.
*/

const Game = require("../models/game.js");

async function getAllGames(req, res){
    try{
        const {start, limit, name, category, summary, id} = req.query
        const where = {};
        if(name){
            where.name = {
                contains: name
            }
        }
        if (category) {
            where.category = parseInt(category);
        }
        if (summary) {
            where.summary = {
                contains: summary,
            };
        }
        if (id) {
            where.id = parseInt(id);
        }
        const games = await Game.getAllGames(start, limit, where)
        res.status(200).json(games)
    }catch(err){
        res.status(500).json({error: `failed to fetch games`,
            msg: err.message
        })
    }
}
async function getGameById(req, res) {
    try {
        const id = parseInt(req.params.id);
        const game = await Game.getGameById(id);
        res.status(200).json(game);
    } catch (err) {
        res.status(500).json({
            error: "Failed to fetch game by id",
            msg: err.message,
        });
    }
}

module.exports = {getAllGames, getGameById}