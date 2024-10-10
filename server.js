import express from "express";
import "dotenv/config.js"
const servidor = express()

const PORT = process.env.PORT

const ready = ()=> console.log(`Servidor listo en el puerto ${PORT}`);

servidor.listen(PORT,ready)
console.log(process.env);

servidor.get('/saludo',(request,response) =>{
    response.send('Hola mundo en Express')
})



// control+c para cerrar el servidor