const mysql = require('mysql');

let connection = null;

function mysqlConnection(cb){

    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '2212',
        database: 'habit-tracker'
    });

    connection.connect((err) => {
        if(err){
            throw err
        }else {
            console.log("Mysql Connected")
            cb()
        }
    });
    

}

function getDbConnection (){

    if(connection){
        return connection;
    }else {
        mysqlConnection(()=>{})
        return connection;
    }

}

module.exports = mysqlConnection;
module.exports.getDbConnection = getDbConnection;
