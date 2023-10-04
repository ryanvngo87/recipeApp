const express = require('express');
const app = express();

const db = require('./models')

// Checks if there are any tables to be created. If not, create them.
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});


