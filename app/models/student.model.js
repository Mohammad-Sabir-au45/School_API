import { sequelize } from "../db/database.js";

export const Student = sequelize.define(
  "student",{},
    {
      timestamps: false,
    }
);

