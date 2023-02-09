const mongoose = require('mongoose');

require('dotenv').config();
mongoose.set("strictQuery", false);


exports.connect = () => {
    mongoose.connect(
        process.env.MONGO_URI,
        
    ).then(() => {
        console.log(`App connecting to ${process.env.MONGO_URI}`)
    }).catch(err => {
        console.log(err)
    })
}