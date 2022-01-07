const MySQLi = require('mysqli');
let conn = new MySQLi({
   host: 'MYSQL5045.site4now.net',
   post: 3306,
   user: 'a7ec54_maindb',
   pass: 'qwerty009',
    db: 'db_a7ec54_maindb'
});

let db = conn.emit(false, '');

module.exports = {
    database: db
};