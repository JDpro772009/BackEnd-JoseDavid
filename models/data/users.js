import "dotenv/config.js"
import "../../config/database.js"
import User from "../User.js"
const usuarios = [
    {
      name: "Ana García",
      email: "ana.garcia@email.com",
      password: "clave123",
     
    },
    {
      name: "Carlos Rodríguez",
      email: "carlos.rodriguez@email.com",
      password: "segura456",
     
    },
    {
      name: "Elena Martínez",
      email: "elena.martinez@email.com",
      password: "elena2024",
        },
    {
      name: "David López",
      email: "david.lopez@email.com",
      password: "davidpass",
      
    },
    {
      name: "Isabel Sánchez",
      email: "isabel.sanchez@email.com",
      password: "isa1234",
    
    },
    {
      name: "Francisco Pérez",
      email: "francisco.perez@email.com",
      password: "fran5678",
    
    },
    {
      name: "María Gómez",
      email: "maria.gomez@email.com",
      password: "mariag2024",
 
    },
    {
      name: "Jorge Fernández",
      email: "jorge.fernandez@email.com",
      password: "jorgef90",
   
    },
    {
      name: "Laura Torres",
      email: "laura.torres@email.com",
      password: "lau3456",
      
    },
    {
      name: "Roberto Díaz",
      email: "roberto.diaz@email.com",
      password: "rob1980",
      
    }
  ];


  
User.insertMany(usuarios)