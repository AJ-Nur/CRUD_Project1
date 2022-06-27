import { Sequelize } from "sequelize";
import db from "../config/db.js";
 
const { DataTypes } = Sequelize;
 
const Student = db.define('health',{
    name:{
        type: DataTypes.STRING
    },
    height:{
        type: DataTypes.DOUBLE
    },
    weight:{
        type: DataTypes.DOUBLE
    },
    bloodType:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Student;