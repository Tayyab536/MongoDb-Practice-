import mongoose from "mongoose";
const ConnectionDataBase= async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://taibicode:v11MFg5hXd4yiz3x@mysql.efabav5.mongodb.net/DbPractice"
    );
    console.log("connected");
  } catch (error) {
    console.log("not connected", error);
  }
};

export {ConnectionDataBase}