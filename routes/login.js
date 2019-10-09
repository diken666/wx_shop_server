const express = require('express');
const router = express.Router();
const md5 = require('../md5/md5.min');

router.get('/', (req, res) => {
    console.log(req.query);
    let id = req.query.id;
    let psw = req.query.psw;
    if ( id === '111' && psw === '222' ){
        res.cookie('login', md5('isLogin'), { expires: new Date(Date.now() + 60*60*1000), singed: true, httpOnly: true});
        res.json({
            state: 'ok'
        })
    }
});

router.post('/', (req, res) =>{
    let id = req.body.id;
    let psw = req.body.psw;
    res.cookie('userName', id, { expires: new Date(Date.now() + 60*60*1000), singed: true, httpOnly: true})
    res.json({
        id,
        psw
    })
});

module.exports = router;