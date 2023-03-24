import { Sequelize } from "sequelize";
 
const db = new Sequelize('image_demo', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;
