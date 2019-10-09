const express = require('express');
const router = express.Router();
const db = require('../db/dbConnect');

router.get('/', (req, res) => {
    res.json({
        state: "ok",
        msg: "请求成功",
        data: {
            userInfo: []
        }
    })
});

module.exports = router;