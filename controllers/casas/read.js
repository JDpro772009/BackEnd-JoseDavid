import Casa from "../../models/Casa.js";

let allCasas=async (request,response)=>{
    try {
        let all = await Casa.find()
        return response.status(200).json({
            response: all
        })
    } catch (error) {
        return response.status(500).json({
            response: error
        })
    }
    
   }
   let jardinCasas=async (request,response)=>{
    try {
        let jardinN = request.params.n
        let all = await Casa.find({jardin:jardinN})
        return response.status(200).json({
            response: all
        })
    } catch (error) {
        return response.status(500).json({
            response: error
        })
    }
    
   }


export {allCasas, jardinCasas}