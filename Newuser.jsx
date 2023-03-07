import React, {useState} from 'react';
import {Button } from 'react-bootstrap';
import "./Newuser.css"
import {useNavigate, Link} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Customers from '../UserList/Customers';

const Newuser = () => {
    const[ name , setName] = useState("")
    const[ email, setEmail] = useState("")
   
   const[ contact , setContact] = useState("")
   const[ gender , setGender] = useState("")
   const[ address , setAddress] = useState("")
   const[ transaction, setTransaction] = useState("")

   
   let history =useNavigate();
   const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuidv4();
    let uniqueId = ids.slice(0,5);
   
    let a = name,
    b = email,
    c = transaction,
    d = contact,
    f = gender,
    g= address;
    

    Customers.push({id: uniqueId, Name: a , Email: b, Transaction: c, Contact: d, Gender:f, Address:g})

    history ("/users")

   }
    return (
        <div className='newuser'>
            <h1>New Customer</h1>
            <form className="newuserform">
               
                <div className="newitem">
                    <label >Full name</label>
                    <input type="text" placeholder='Enter name' name='name'onChange={(e) => setName (e.target.value)}  />
                </div>
                
                <div className="newitem">
                    <label >Email </label>
                    <input type="email" placeholder='Enter email' name='email'onChange={(e) => setEmail (e.target.value)} />
                </div>
                <div className="newitem">
                    <label >Contact</label>
                    <input type="number" placeholder='Enter contact' name='contact' onChange={(e) => setContact (e.target.value)} />
                </div>
                <div className="newitem">
                    <label >Gender</label>
                    <input type="text" placeholder='Male/Female' name='gender' onChange={(e) => setGender (e.target.value)} />
                </div>
                <div className="newitem">
                    <label >Address </label>
                    <input type="text" placeholder='Enter Adress' name='address' onChange={(e) => setAddress (e.target.value)} />
                </div>
              
                <div className="newitem">
                    <label >Transaction</label>
                    <input type="text" placeholder='Enter Amount' name='transaction' onChange={(e) => setTransaction (e.target.value)} />
                </div>
                <Link to="./users">
 <Button variant="success" className='create'  onClick={(e)=> handleSubmit(e)} >Submit</Button>
                </Link>
            </form>
            
        </div>
    );
}



export default Newuser;
