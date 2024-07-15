import { combineReducers, createStore } from "redux"
import Account from "./Account";
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
function TransactionReducer(state=[],action){
    switch(action.type){
        case "Add_transaction":
            return [...state,{id:action.payload.id,amount:action.payload.amount,type:action.payload.type,date:action.payload.date}]
        default:
            return state    
    }
}
let RootReducer=combineReducers({
    transaction:TransactionReducer,
    Account:AccountReducer
})
const store=createStore(RootReducer);

export default store;