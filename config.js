import mongoose from "mongoose";
import 'dotenv/config';

export async function configureDb(){
    try {
       await mongoose.connect(process.env.DB_URL);
       console.log('connection is established');
    } catch (error) {
        console.log('connection is not  established');
    }
}