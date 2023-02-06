const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('dotenv').config();
require('./config/database').connect();


const blogRoutes = require('./routers/blog.route')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', blogRoutes);


app.listen(process.env.PORT, () => {
    console.log(`App listening at http://localhost:${process.env.PORT}`)
});