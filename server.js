import express from "express";
import cors from "cors";
import { sequelize } from "./app/db/database.js";
import routes from "./app/routes/user.routes.js";



const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


app.use(express.json());  


app.use(express.urlencoded({ extended: true }));  
await sequelize.sync({ force: false });

// middleware
app.use(express.json());

// routes
app.use("/api", routes);


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
