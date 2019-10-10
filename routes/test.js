const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {

    if (req.cookies.userName) {
        res.json({
            state: "ok",
            msg: "请求成功"
        })
    } else {
        res.json({
            state: "error",
            msg: "未登录"
        })
    }


    // if(req.session.isFirs && req.cookies.isFirs) {
    //     console.log(req.session);
    //     console.log(req.cookies);
    //     // if (req.session.isFirst === req.cookies.isFirst)
    //     res.json({
    //         "code": "success",
    //         "data": [1, 2, 3]
    //     })
    // } else {
    //     req.session.isFirs = 1;
    //     res.cookie('isFirs', 1, { maxAge: 60 * 60 * 1000, singed: true});
    //     res.json({
    //         "code": "403",
    //         "data": {}
    //     })
    // }

} );

module.exports = router;