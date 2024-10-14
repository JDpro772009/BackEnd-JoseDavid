import "dotenv/config.js"
import "../../config/database.js"
import Auto from "../Auto.js";
const autos = [
  {
      marca: "Toyota",
      color: "Rojo",
      airbag: true,
      tiposFrenos: "Disco",
      motor: "2.0L",
      potencia: "150 HP",
      peso: 1300,
      aceleracion: 8.5,
      tipoTransmision: "Automática",
      tipoNeumaticos: "Radiales"
  },
  {
      marca: "Honda",
      color: "Azul",
      airbag: true,
      tiposFrenos: "Disco",
      motor: "1.8L",
      potencia: "140 HP",
      peso: 1250,
      aceleracion: 9.0,
      tipoTransmision: "Manual",
      tipoNeumaticos: "Radiales"
  },
  {
      marca: "Ford",
      color: "Negro",
      airbag: true,
      tiposFrenos: "Disco",
      motor: "2.5L",
      potencia: "160 HP",
      peso: 1400,
      aceleracion: 7.8,
      tipoTransmision: "Automática",
      tipoNeumaticos: "Radiales"
  },
  {
      marca: "Chevrolet",
      color: "Blanco",
      airbag: true,
      tiposFrenos: "Disco",
      motor: "1.6L",
      potencia: "110 HP",
      peso: 1200,
      aceleracion: 10.5,
      tipoTransmision: "Manual",
      tipoNeumaticos: "Radiales"
  },
  {
      marca: "Nissan",
      color: "Gris",
      airbag: true,
      tiposFrenos: "Disco",
      motor: "2.0L",
      potencia: "145 HP",
      peso: 1350,
      aceleracion: 8.7,
      tipoTransmision: "Automática",
      tipoNeumaticos: "Radiales"
  },
  {
      marca: "Hyundai",
      color: "Verde",
      airbag: true,
      tiposFrenos: "Disco",
      motor: "1.6L",
      potencia: "120 HP",
      peso: 1250,
      aceleracion: 9.5,
      tipoTransmision: "Manual",
      tipoNeumaticos: "Radiales"
  },
  {
      marca: "Kia",
      color: "Amarillo",
      airbag: true,
      tiposFrenos: "Disco",
      motor: "2.0L",
      potencia: "155 HP",
      peso: 1320,
      aceleracion: 8.3,
      tipoTransmision: "Automática",
      tipoNeumaticos: "Radiales"
  },
  {
      marca: "Volkswagen",
      color: "Marrón",
      airbag: true,
      tiposFrenos: "Disco",
      motor: "1.5L",
      potencia: "130 HP",
      peso: 1280,
      aceleracion: 9.2,
      tipoTransmision: "Manual",
      tipoNeumaticos: "Radiales"
  },
  {
      marca: "Subaru",
      color: "Celeste",
      airbag: true,
      tiposFrenos: "Disco",
      motor: "2.5L",
      potencia: "170 HP",
      peso: 1450,
      aceleracion: 7.5,
      tipoTransmision: "Automática",
      tipoNeumaticos: "Radiales"
  },
  {
      marca: "Mazda",
      color: "Rosa",
      airbag: true,
      tiposFrenos: "Disco",
      motor: "2.0L",
      potencia: "155 HP",
      peso: 1300,
      aceleracion: 8.0,
      tipoTransmision: "Manual",
      tipoNeumaticos: "Radiales"
  }
];



  
Auto.insertMany(autos)