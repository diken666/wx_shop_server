const express = require('express');
const router = express.Router();
const svgCaptcha = require('svg-captcha');

router.get('/', ( req, res ) => {
    var codeConfig = {
        size:5,     //  验证码长度
        ignoreChars:'O01i',     //..验证码字符中排除O01i
        noise:2,            //  干扰线条数量
        height:44
    }

    var captcha = svgCaptcha.create(codeConfig)
// console.log('captcha=',captcha)
    let x = captcha.text.toLowerCase()
    req.session['captcha'] = captcha.text.toLowerCase()    //  存session用于验证接口获取文字码

    var codeData = {
        img:captcha.data
    };
    res.render('codeShow', {img: codeData.img})

});

module.exports = router;