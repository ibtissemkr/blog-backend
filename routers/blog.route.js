const express = require('express');
const app = express();
const router = express.Router();

const { createBlog } = require('../controllers/blog.controller')


router.post('/add-blog', createBlog)




module.exports = router;