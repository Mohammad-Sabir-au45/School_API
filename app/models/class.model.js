import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";

import { Student } from "./student.model.js";

export const Class = sequelize.define(
  "class",
  {
    id:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true
    },
    subject:{
      type:DataTypes.STRING,
    },
  },
    {
      timestamps: false,
    }
);

Class.hasMany(Student, {
  foreignKey: "class_id",
  sourceKey: "id",
});

Student.belongsTo(Class, {
  foreignKey: "class_id",
  targetId: "id",
});

