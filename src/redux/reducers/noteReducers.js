import { CREATEFAIL, CREATEREQUEST, CREATESUCCESS, NOTEFAIL, NOTEREQUEST, NOTESUCCESS } from "../actions/noteContants"

// export const posts= (state={posts:[],loading:false},action)=>{
//     switch(action.type){
//         case NOTEREQUEST:
//            return {
//                posts,
//                loading:false
//            }
//         case NOTESUCCESS:
//             return {
//                posts: action.payload,
//                loading:true,
//             }
//         case NOTEFAIL:
//             return {
                
//                 loading:action.payload,
//              }
//         default:
//             return state
//     }
// }

// export const createPost= (state={post:[],loading:false},action)=>{
//     switch(action.type){
//         case CREATEREQUEST:
//            return {
//                posts,
//                loading:false
//            }
//         case CREATESUCCESS:
//             return {
//                posts: action.payload,
//                loading:true,
//             }
//         case CREATEFAIL:
//             return {
                
//                 loading:action.payload,
//              }
//         default:
//             return state
//     }
// }
    
export const fetchData= (product=[],action)=>{
    switch(action.type){
     //    case "REQUEST":
     //        return {
     //            product:[],
     //            loading:false
     //        }
         case "FETCH":
             return action.payload
                
             
             // case "FAIL":
             //     return {
             //        product:action.payload,
             //        loading:false
             //     }
             case "CREATE":
                 return [...product,action.payload]
            
             case "DELETE":
                 return product.filter(x=>x._id!==action.payload)
             case "UPDATE":
                     return product.map(x=>x._id===action.payload._id?action.payload:x)
                 
     default:
         return product
    }
 }