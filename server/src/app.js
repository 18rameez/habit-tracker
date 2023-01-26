const express = require('express')
const app = express();
var bodyParser = require('body-parser');
const userRoutes = require('./routes/user')
const mysqlConnection = require('./util/database')
const cors = require('cors')


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/', userRoutes)


mysqlConnection(() => {

    app.listen(5001, () => {
        console.log("listening to port 5001")
    })
})

