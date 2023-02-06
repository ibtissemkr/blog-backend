const mongoose = require('mongoose')

const Blog = require('../models/blog.model')

exports.createBlog = async (req, res) => {
    try {
        console.log(req.body)
        const {title, description, picture} = req.body;
        
        if(!(title && description && picture)) return res.json({success: false,message: "All inputs are required" })
        const blog = await Blog.create({
            title: title,
            description: description,
            picture: picture
        });
        
        if(!blog) return res.json({success: false, message:"something went wrong"})
        return res.json({success: true, data: blog})
    } catch(e) {
        return res.json({success: false, error: e.message})
    }
}

exports.getAllBlogs = async (req, res) => {
    try {  
        const blogs = await Blog.find().select("-_id -__v")
        return res.json({success: true, data: blogs})

    } catch(e) {
        return res.json({success: false, error: e.message})
    }
}


exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.findOne({_id: req.params.id});
        if(blog) return res.json({success: true, data: blog});
        return res.json({success: false, message: "no blog match with this id"})
    } catch(e) {
        return res.json({success: false, error: e.message})
    }
}