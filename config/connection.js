const Sequelize = require('sequelize');
require('dotenv').config();

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
// click on configure add ons, add the jawsdbmysql,
// might be good after that
// check logs if stuff isn't working
// next to open app theres ... 
// view logs there 
// add jawsDB first, then do a push