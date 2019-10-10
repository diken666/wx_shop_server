
module.exports = {
    selectUser(id){
        return `select * from user_info where userId = '${id}';`
    }
};