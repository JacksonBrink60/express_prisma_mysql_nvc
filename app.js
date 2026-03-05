/**
 * @swagger
 * /game/{id}:
 *   get:
 *     tags:
 *       - Games
 *     summary: retrieves the game with the given id
 *     parameters:
 *         - in: path
 *           name: id
 *     responses:
 *       200:
 *         description: the game with the given id
 */

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');

const express = require("express")
const app = express();
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const gameRoutes = require("./routes/gameRoutes")

app.use("/game", gameRoutes)

app.listen(3000, () => {
    console.log(`Server API running on http://localhost:3000/`);
    console.log(`Swagger docs available at http://localhost:3000/docs`);
});