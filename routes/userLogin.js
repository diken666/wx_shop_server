const express = require('express');
const router = express.Router();

router.get('/', ( req, res ) => {
    if ( req.cookies.userId ) {
        res.json({
            state: "ok",
            msg: "已经处于登录状态"
        })
    } else {
        res.render('userLogin', {})
    }
} );

module.exports = router;