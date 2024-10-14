import express from "express";
import "dotenv/config.js"
import "./config/database.js"
import cors from "cors"
import morgan from "morgan";
import indexRouter from "./routers/index.js"
const server = express()

const PORT = process.env.PORT

const ready = ()=> console.log(`Server listo en el puerto ${PORT}`);

server.use(express.json()) //permite trabajar con formato json
server.use(express.urlencoded({ extended: true }))//permite los parametros y otras cosas en la url
server.use(cors())
server.use(morgan("dev"))//sirve para llevar un registro de las peticiones de nuestro server

server.use("/api", indexRouter)

server.listen(PORT,ready)
console.log(process.env);

server.get('/saludo',(request,response) =>{
    response.send('Hola mundo en Express')
})



// control+c para cerrar el server