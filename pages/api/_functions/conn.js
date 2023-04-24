import { dataBase } from "./dbcontroller"

export const getConnection = ()=>{    
    const db = dataBase("db/data");
    if(db.status == 200 ){
        return db.connection
    }else{
        return null
    }
}


