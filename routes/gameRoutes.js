/**
 * @swagger
 * /game:
 *
 *   get:
 *     tags:
 *       - Games
 *     summary: Get all games - default limit of 200
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: name
 *         - in: query
 *           name: game_id
 *         - in: query
 *           name: summary
 *         - in: query
 *           name: category
 *     responses:
 *       200:
 *         description: A list of games that matches given criteria
 */
const express = require("express")
const router = express.Router()
const gameController = require("../controllers/gameController")

router.get("/", gameController.getAllGames)
router.get("/:id", gameController.getGameById)

module.exports = router