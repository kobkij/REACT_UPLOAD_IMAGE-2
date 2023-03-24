import Sequelize from 'sequelize'; 
import db from "../config/database.js";

const { DataTypes } = Sequelize;
 
const Image = db.define('image',{
    url:{
        type: DataTypes.STRING
    },
    image_name:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Image;
