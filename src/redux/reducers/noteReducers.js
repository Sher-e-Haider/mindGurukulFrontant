export const fetchData= (product=[],action)=>{
    switch(action.type){
   
         case "FETCH":
             return action.payload
            
             case "CREATE":
                 return [...product,action.payload]
            
             case "DELETE":
                 return product.filter(x=>x._id!==action.payload)
             case "UPDATE":
                     return product.map(x=>x._id===action.payload._id?action.payload:x)
            case "GET":
                return action.payload 
                    
     default:
         return product
    }
 }