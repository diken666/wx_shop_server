const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    if(req.session.isFirst && req.cookies.isFirst) {
        console.log(req.session);
        console.log(req.cookies);
        // if (req.session.isFirst === req.cookies.isFirst)
        res.json({
            "code": "success",
            "data": [1, 2, 3]
        })
    } else {
        req.session.isFirst = 1;
        res.cookie('isFirst', 1, { maxAge: 60 * 60 * 1000, singed: true});
        res.json({
            "code": "403",
            "data": {}
        })
    }

} );

module.exports = router;