
const express = require('express');
const router = express.Router();
const db = require('../db/dbConnect');
const sql = require('../sql/proInfo');

router.get('/', ( req, res ) => {
    if ( req.cookies.userId ) {
        db.query(sql.getAllProInfo(), [], ( err, response ) => {
            if ( err ) {
                throw Error(err)
            } else {
                res.json({
                    state: "ok",
                    msg: "请求成功",
                    data: response
                })
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