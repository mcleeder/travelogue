const express = require('express');
const router = require('express').Router();
const path = require('path');

router.use(express.static(path.join(__dirname, 'public')));

router.get('/api', (req, res) => {
    res.send("This is the API under /localhost/reno/api");
})

module.exports = router;