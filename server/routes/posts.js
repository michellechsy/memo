const express = require('express');
const validator = require('validator');
const Posts = require('mongoose').model('Posts');

const router = new express.Router();

router.get('/', (req, res) => {
    user_posts = Posts.find({'postedBy': req.body._id}).populate('postedBy').exec();
    return res.status(400).json({
        posts: user_posts
    });

});

module.exports = router;
