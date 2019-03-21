var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'fg4tu1av57u19p1t ',
        database: 'brt7zraxrk4jd625',    
    });
};

connection.connect();
module.exports = connection;