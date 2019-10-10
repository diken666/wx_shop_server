const express = require('express');
const router = express.Router();
const db = require('../db/dbConnect');

router.get('/', (req, res) => {
    if (req.cookies.userName){
        res.json({
            state: "ok",
            msg: "请求成功",
            data: {
                userInfo: []
            }
        })
    } else {
        res.json({
            state: "error",
            msg: "未登录"
        })
    }

});

module.exports = router;