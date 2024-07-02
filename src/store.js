import { createStore } from "redux"
let intialAccount={
    balance:0,
    name:'',
    phoneNumber:null
}

function AccountReducer(state=intialAccount,action){
    switch(action.type){
        case "deposit":
            return {...state,balance:state.balance+ +action.payload};
        case "withdraw":
             return {...state,balance:state.balance- +action.payload};
        case "mobile_update":
            return {...state,phoneNumber:action.payload};
        case "name_update":
            return {...state,name:action.payload}     
        case "reset":
            return intialAccount  
        default :
             return state            
    }
   

}
const store=createStore(AccountReducer);

export default store;