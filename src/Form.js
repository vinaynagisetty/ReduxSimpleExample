import { useState } from "react";
import { useDispatch } from "react-redux";
import { Deposit,Withdraw,Mobile_update,Name_update,Reset} from "./Action";


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
                    dispatch(Deposit(amount))
                    setAmount("") 
                }
              }
              >Deposit</button>
            </div>
            <div className="col-1  mx-2 ">
              <button className="btn btn-danger"
               onClick={
                ()=>{
                    dispatch(Withdraw(amount))
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
                    dispatch(Name_update(name))
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
                    dispatch(Mobile_update(mobile))
                    setMobile("") 
                }
              }
              >Update</button>
            </div>
          

        </div>
        <button className="btn btn-danger mt-2" 
        onClick={
            ()=>{
                dispatch(Reset())
            }
        }
        >Reset</button>
     
      </div>
    );
  }
  
  export default Form;
  