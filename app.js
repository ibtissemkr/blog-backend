const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors');
require('dotenv').config();
require('./config/database').connect();


const blogRoutes = require('./routers/blog.route')
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());
app.use('/api', blogRoutes);


app.listen(process.env.PORT, () => {
    console.log(`App listening at http://localhost:${process.env.PORT}`)
});