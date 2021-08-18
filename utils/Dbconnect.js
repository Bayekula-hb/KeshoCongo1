const Sequelize = require("sequelize");

// const sequelize = new Sequelize("atelier_sequelize", "root", "hobed", {
// 	dialect: "mysql",
// 	host: "localhost"
// });

// const sequelize = new Sequelize("bsouruivlyra7oak70av","ugkdeyce9bmzpgij","SvRh1B1Z9eZqQrzZS59a",{
//     dialect: "mysql",
// })
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:"mysql"
})
module.exports = sequelize;