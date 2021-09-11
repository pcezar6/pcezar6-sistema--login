import { createConnection,getConnection} from "typeorm";

const DBConnect = async ()=>{

    try{
    getConnection();
    } catch(error){
      await createConnection();
    }
console.log("DATABASE CONECTADO COM SUCESSO!");
};


const TryDBConnect = async (onError: Function, next: Function)=>{
  try{
    await DBConnect();
    next();  
  } catch(error){
      onError();
  }
};
export{TryDBConnect};