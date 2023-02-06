const express = require('express');
const app = express();
const router = express.Router();

const { createBlog, getAllBlogs, getBlog } = require('../controllers/blog.controller')


router.post('/add-blog', createBlog)
router.get('/', getAllBlogs)
router.get('/:id', getBlog)



module.exports = router;