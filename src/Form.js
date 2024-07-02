import { useState } from "react";
import { useDispatch } from "react-redux";


function Form() {
   let dispatch= useDispatch()
   let[amount,setAmount]= useState()
   let[name,setName]= useState()
   let[mobile,setMobile]= useState()
    return (
      <div className="container m-4">
        <div className="row">
            <div className="col-4">
                <input className="form-control" value={amount} type="number" placeholder="Enter the Amount"
                onChange={
                    (e)=>{
                        setAmount(e.target.value) 
                    }
                } />

            </div>
            <div className="col-1  mx-2 ">
              <button className="btn btn-primary"
              onClick={
                ()=>{
                    dispatch({type:"deposit",payload:amount})
                    setAmount("") 
                }
              }
              >Deposit</button>
            </div>
            <div className="col-1  mx-2 ">
              <button className="btn btn-danger"
               onClick={
                ()=>{
                    dispatch({type:"withdraw",payload:amount})
                    setAmount("") 
                }
              }
              >Withdraw</button>
            </div>

        </div>
        <div className="row mt-2">
            <div className="col-4">
                <input className="form-control" value={name} type="text" placeholder="Enter the Name"
                onChange={
                    (e)=>{
                        setName(e.target.value) 
                    }
                } />

            </div>
            <div className="col-1  mx-2 ">
              <button className="btn btn-primary"
              onClick={
                ()=>{
                    dispatch({type:"name_update",payload:name})
                    setName("") 
                }
              }
              >Update</button>
            </div>
          

        </div>
        <div className="row mt-2">
            <div className="col-4">
                <input className="form-control" value={mobile} type="number" placeholder="Enter the mobile Number"
                onChange={
                    (e)=>{
                        setMobile(e.target.value) 
                    }
                } />

            </div>
            <div className="col-1  mx-2 ">
              <button className="btn btn-primary"
              onClick={
                ()=>{
                    dispatch({type:"mobile_update",payload:mobile})
                    setMobile("") 
                }
              }
              >Update</button>
            </div>
          

        </div>
        <button className="btn btn-danger mt-2" 
        onClick={
            ()=>{
                dispatch({type:"reset"})
            }
        }
        >Reset</button>
     
      </div>
    );
  }
  
  export default Form;
  