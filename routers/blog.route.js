const express = require('express');
const app = express();
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const { createBlog, getAllBlogs, getBlog } = require('../controllers/blog.controller')


router.post('/add-blog', upload.single('picture'), createBlog)
router.get('/all',getAllBlogs)
router.get('/blog/:id', getBlog)



module.exports = router;