import { ConnectionDataBase } from "./Connection/DBConnetion.js";
// import { insertmanys, insertOne } from "./Insertion/insertions";
import { getAllUsers, findUserById,findByName,findUserActive } from "./Querys/Queys.js";

ConnectionDataBase()
  .then(async() => {
    // insertOne();
    // insertmanys;
    // getAllUsers();
    // const user = await findUserById("6895e246e850ccd6e1dc4555"); 
    const user=await findUserActive()
    console.log("users");
    console.log(user.length);
    
  })
  .catch((e) => {
    throw new e();
  });
