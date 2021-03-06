const mysql = require('mysql');
const pool = mysql.createPool({

    host:"localhost",           //数据库
    user:"root",                //用户名
    password:"password",          //用户密码
    database:"mydb"             //数据库名

});

function query(sql, values, callback){
    pool.getConnection(function (err, connection) {
        if(err){
            throw Error('数据库操作错误')
        }else{
            connection.query(sql, values, function(err, results, fields){
                // console.log(JSON.stringify(results));
                callback(err, results);
                connection.release();
                if(err){
                    throw err;
                }
            })
        }
    })
}

exports.query = query;