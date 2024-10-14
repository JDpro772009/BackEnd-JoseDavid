import "dotenv/config.js"
import "../../config/database.js"
import Casa from "../Casa.js";
const casas = [
    {
        marca: "Casa Moderna",
        color: "Blanco",
        tieneGaraje: true,
        tipoDeTecho: "A dos aguas",
        numeroDeHabitaciones: 3,
        areaConstruida: "150 m²",
        peso: 2000,  // peso en kg
        jardin: true,
        tipoCocina: "Americana",
        tipoCalefaccion: "Gas"
    },
    {
        marca: "Casa Tradicional",
        color: "Beige",
        tieneGaraje: true,
        tipoDeTecho: "Plana",
        numeroDeHabitaciones: 4,
        areaConstruida: "180 m²",
        peso: 2500,  // peso en kg
        jardin: true,
        tipoCocina: "Separada",
        tipoCalefaccion: "Eléctrica"
    },
    {
        marca: "Casa de Campo",
        color: "Verde",
        tieneGaraje: false,
        tipoDeTecho: "A dos aguas",
        numeroDeHabitaciones: 2,
        areaConstruida: "100 m²",
        peso: 1500,  // peso en kg
        jardin: true,
        tipoCocina: "Integrada",
        tipoCalefaccion: "Leña"
    },
    {
        marca: "Casa Minimalista",
        color: "Gris",
        tieneGaraje: true,
        tipoDeTecho: "Plana",
        numeroDeHabitaciones: 1,
        areaConstruida: "80 m²",
        peso: 1200,  // peso en kg
        jardin: false,
        tipoCocina: "Americana",
        tipoCalefaccion: "Eléctrica"
    },
    {
        marca: "Casa Familiar",
        color: "Azul",
        tieneGaraje: true,
        tipoDeTecho: "A dos aguas",
        numeroDeHabitaciones: 5,
        areaConstruida: "220 m²",
        peso: 3000,  // peso en kg
        jardin: true,
        tipoCocina: "Integrada",
        tipoCalefaccion: "Gas"
    },
    {
        marca: "Casa Ecológica",
        color: "Madera",
        tieneGaraje: true,
        tipoDeTecho: "A dos aguas",
        numeroDeHabitaciones: 3,
        areaConstruida: "140 m²",
        peso: 1800,  // peso en kg
        jardin: true,
        tipoCocina: "Americana",
        tipoCalefaccion: "Solar"
    },
    {
        marca: "Casa de Playa",
        color: "Blanco",
        tieneGaraje: false,
        tipoDeTecho: "A dos aguas",
        numeroDeHabitaciones: 4,
        areaConstruida: "160 m²",
        peso: 2300,  // peso en kg
        jardin: true,
        tipoCocina: "Integrada",
        tipoCalefaccion: "Eléctrica"
    },
    {
        marca: "Casa Contemporánea",
        color: "Negro",
        tieneGaraje: true,
        tipoDeTecho: "Plana",
        numeroDeHabitaciones: 3,
        areaConstruida: "200 m²",
        peso: 2400,  // peso en kg
        jardin: true,
        tipoCocina: "Americana",
        tipoCalefaccion: "Gas"
    },
    {
        marca: "Casa de Dos Plantas",
        color: "Rojo",
        tieneGaraje: true,
        tipoDeTecho: "A dos aguas",
        numeroDeHabitaciones: 5,
        areaConstruida: "250 m²",
        peso: 3500,  // peso en kg
        jardin: true,
        tipoCocina: "Separada",
        tipoCalefaccion: "Eléctrica"
    },
    {
        marca: "Casa Rústica",
        color: "Madera",
        tieneGaraje: false,
        tipoDeTecho: "Teja",
        numeroDeHabitaciones: 2,
        areaConstruida: "90 m²",
        peso: 1600,  // peso en kg
        jardin: true,
        tipoCocina: "Integrada",
        tipoCalefaccion: "Leña"
    }
];



  
Casa.insertMany(casas)