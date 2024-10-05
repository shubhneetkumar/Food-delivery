import mongoose from 'mongoose';

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://Shubhneetweb:Shubhneet@cluster0.isl90.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
