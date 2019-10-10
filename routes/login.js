const express = require('express');
const router = express.Router();
const md5 = require('../md5/md5.min');

router.get('/', (req, res) => {
    console.log(req.query);

    res.json({
        state: "error",
        msg: "请求出错"
    })

});

router.post('/', (req, res) =>{
    let id = req.body.id;
    let psw = req.body.psw;
    res.cookie('userName', id, { expires: new Date(Date.now() + 60*60*1000), singed: true, httpOnly: true});
    res.json({
        id,
        psw
    })
});

module.exports = router;