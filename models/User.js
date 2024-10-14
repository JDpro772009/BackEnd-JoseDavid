// Los modelos normalmente comienzan con mayusculas
import { Schema,model } from "mongoose";

let coleccion = "users"
let schema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
},{
    timestamps:true
})

let User = model(coleccion,schema)
export default User