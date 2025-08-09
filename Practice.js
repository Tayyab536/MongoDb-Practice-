import { ConnectionDataBase } from "./Connection/DBConnetion.js";
// import { insertmanys, insertOne } from "./Insertion/insertions";
import { getAllUsers, findUserById,findByName } from "./Querys/Queys.js";

ConnectionDataBase()
  .then(async() => {
    // insertOne();
    // insertmanys;
    // getAllUsers();
    // const user = await findUserById("6895e246e850ccd6e1dc4555"); 
    const user=await findByName("Tina Morris")
    console.log("user");
    console.log(user);
    
  })
  .catch((e) => {
    throw new e();
  });
