import { ConnectionDataBase } from "./Connection/DBConnetion.js";
// import { insertmanys, insertOne } from "./Insertion/insertions";
import { getAllUsers, findUserById,findByName,findUserActive,findUserAge24,findUserAgeGt30 } from "./Querys/Queys.js";

ConnectionDataBase()
  .then(async() => {
    // insertOne();
    // insertmanys;
    // getAllUsers();
    // const user = await findUserById("6895e246e850ccd6e1dc4555"); 
    // const user=await findByName("abc")
    // const user=await findUserActive()
    // const user=await findUserAge24()
    const user=await findUserAgeGt30()
    console.log("users");
    console.log(user);
    
  })
  .catch((e) => {
    throw new e();
  });
