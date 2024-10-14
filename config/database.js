import mongoose from "mongoose";

let url = process.env.URL_MONGO

console.log(url)

mongoose.connect(url)
.then(()=>console.log(`Conexion exitosa en la url: ${url}`))