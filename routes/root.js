const express = require("express");
const router = express.Router();
const path = require('path');

//Main website starts here

router.get('/fintech-portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, '..','fintech-portfolio.html'));
});

module.exports = router;
