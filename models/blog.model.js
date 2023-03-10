const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    }

});

const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;