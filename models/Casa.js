// Los modelos normalmente comienzan con mayusculas
import { Schema,model } from "mongoose";

let coleccion = "casas"
let schema = new Schema({
    marca:{type:String,required:true},
    color:{type:String,required:true},
    tieneGaraje:{type:Boolean,required:true},
    tipoDeTecho:{type:String,required:true},
    numeroDeHabitaciones:{type:Number,required:true},
    areaConstruida:{type:String,required:true},
    peso:{type:Number,required:true},
    jardin:{type:Boolean,required:true},
    tipoCocina:{type:String,required:true},
    tipoCalefaccion:{type:String,required:true}
},{
    timestamps:true
})

let Casa = model(coleccion,schema)
export default Casa