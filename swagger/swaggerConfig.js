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

const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node.js REST API with Swagger and MySQL",
            version: "1.0.0",
        },
    },
    apis: ["./routes/*.js"], // Points to API route files
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;