export let  Deposit=(amount)=>{
    return {type:"deposit",payload:amount}
}
export let  Withdraw=(amount)=>{
    return {type:"withdraw",payload:amount}
}
export let  Mobile_update=(mobile)=>{
    return {type:"mobile_update",payload:mobile}
}
export let  Name_update=(name)=>{
    return {type:"name_update",payload:name}
}
export let  Reset=()=>{
    return {type:"reset"}
}