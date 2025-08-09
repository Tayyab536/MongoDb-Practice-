import mongoose from "mongoose";
import User from "./models/user.model.js";
import { dbConnection } from "./Connection/DataBase.js";
import { getAllUsers } from "./Querys/Get.js";

dbConnection().then(() => {
  // insertOne();
  // insertmanys();
  getAllUsers();
});

