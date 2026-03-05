MVC - Model View Controller - architecture pattern

- Model: represents the data and business logic
- View: responsible for formatting output - in this case, it will just be returning our json data (we're making a rest api) (routes)
- Controller: handles the logic of processing requests and orchestrating data flow


Connect to Prisma: Prisma is a library you can use to get up and running

initialize a node project
`npm init -y`


install Prisma:
`npm install prisma@6 @prisma/client@6`

then initialize prisma in the project:
`npx prisma init`

`npx prisma db pull`

`npx prisma generate`

```
const { PrismaClient } = require("../generated/prisma/client");
const prisma = new PrismaClient();

module.exports = prisma;
```


`npm install express`

`npm install swagger-jsdoc swagger-ui-express`