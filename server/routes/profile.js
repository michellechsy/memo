const express = require('express');
const validator = require('validator');

const router = new express.Router();

router.get('/', (req, res) => {
    // return res.status(200).json({

    // })
    return res.status(200).end();

});

module.exports = router;
