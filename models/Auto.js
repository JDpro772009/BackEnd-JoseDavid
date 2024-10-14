// Los modelos normalmente comienzan con mayusculas
import { Schema,model } from "mongoose";

let coleccion = "autos"
let schema = new Schema({
    marca:{type:String,required:true},
    color:{type:String,required:true},
    airbag:{type:Boolean,required:true},
    tiposFrenos:{type:String,required:true},
    motor:{type:String,required:true},
    potencia:{type:String,required:true},
    peso:{type:Number,required:true},
    aceleracion:{type:Number,required:true},
    tipoTransmision:{type:String,required:true},
    tipoNeumaticos:{type:String,required:true}
},{
    timestamps:true
})

let Auto = model(coleccion,schema)
export default Auto