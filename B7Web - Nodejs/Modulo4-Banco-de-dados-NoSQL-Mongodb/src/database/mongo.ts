import { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnect = async() => {
    try{
        
        console.log('Conectando ao MongoDb...');
        await connect(process.env.MONGO_URL as string);
        /* //Forma antiga
        await connect(process.env.MONGO_URL as string, {
            useNewUrlParser: true;
            useUnifiedTopology: true
        })
        */
        console.log('MongoDb conectado com sucesso!');

    }catch(error){
        console.log('Erro Conexão MongoDB: ', error);
    }
}