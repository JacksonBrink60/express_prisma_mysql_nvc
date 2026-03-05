const prisma = require("../config/db.js");

async function getAllGames(start =0, limit=50, where={}){
    const games = await prisma.games.findMany({
            where,
            skip: start,
            take: Math.min(limit, 200),
    })
    return games;
}

async function getGameById(id) {
    const game = await prisma.games.findFirst({
        where: {
            game_id: id,
        },
    });
    return game;
}

module.exports = { getAllGames, getGameById };