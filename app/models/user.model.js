import { sequelize } from "../db/database.js";
import { DataTypes } from "sequelize";
import { Student } from "./student.model.js";

export const User = sequelize.define(
  "user",{
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
    },
    mobile_number:{
        type:DataTypes.CHAR(10),

    },    
    email:{
        type: DataTypes.STRING,
        validate: { isEmail: true },
        unique:true,
    },  
  },
    {
      timestamps: false,
    }
);

User.hasMany(Student, {
    foreignKey: "user_id",
    sourceKey: "id",
    onDelete: 'CASCADE',
  });
  
Student.belongsTo(User, {
foreignKey: "user_id",
targetId: "id",
});

  