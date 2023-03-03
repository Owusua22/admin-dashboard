import React, {useEffect,useState} from 'react';
import "./User.css"
import pic10 from "../Assets/user1.png"
import { FaUser } from 'react-icons/fa';
import { Call, DateRange, Email, Place, Publish } from '@material-ui/icons';
import {Link, useNavigate} from "react-router-dom";
import Customers from '../UserList/Customers';


const User = () => {
    const[ name , setName] = useState("")
    const[ id , setId] = useState("")


  const[ email, setEmail] = useState("")
   const[contact , setContact] = useState("")
   const[gender , setGender] = useState("")
   const[address , setAddress] = useState("")
   const[ transaction, setTransaction] = useState("")


   let history =useNavigate();
   let index = Customers.map(function(e){
    return e.id
}).indexOf(id);


const handleSubmit =(e) => {
    e.preventDefault();
    
    let a = Customers[index];
    a.Name = name;
    a.Email = email;
    a.Gender = gender;
    a.Address = address;
    a.Transaction = transaction
    history ("/users");
}
useEffect(() =>{
    setName(localStorage.getItem("Name"))
    setEmail(localStorage.getItem("Email"))
    setContact(localStorage.getItem("Contact"))
    setGender(localStorage.getItem("Gender"))
    setAddress(localStorage.getItem("Address"))
    setTransaction(localStorage.getItem("Transaction"))
    setId(localStorage.getItem("Id"))
},[])
   
    return (
        <div className='users'>
            <div className="usercontainer">
                <h1 className="title"> Edit Details</h1>
                
            </div>
            <div className="userdetails">
                <div className="usershow">
                    <div className="usershowtop">
                        <img src={pic10} alt="" />
                        <div className="usertitle">
                            <span className="name">Anna</span>
                            <span className="userjob">Software Developer</span>
                        </div>
                    </div>
                    <div className="showdown">
                        <span className="showtitle">
                            Account Details
                        </span>
                        <div className="userinfo">
                        <FaUser />
                        
                        <span className="infotitle">
                            Sophie99
                        </span>
                        </div>
                        <div className="userinfo">
                        <DateRange />
                        
                        <span className="infotitle">
                            18-08-1993
                        </span>
                        </div>
                        <span className="showtitle">
                            Contact Details
                        </span>
                        <div className="userinfo">
                        <Email />
                        
                        <span className="infotitle">
                            Sophie99@gmail.com
                        </span>
                        </div>
                        <div className="userinfo">
                        <Call />
                        
                        <span className="infotitle">
                            +233-201-714-339
                        </span>
                        </div>
                        <div className="userinfo">
                        <Place/>
                        
                        <span className="infotitle">
                            Pokuase,Accra
                        </span>
                        </div>
                    </div>
                </div>
                <div className="userupdate">
                    <span className="updatetitle">Edit</span>
                    <form  className="updateform">
                        <div className="updateleft">
                            
                            <div className="updateitem">
                                <label htmlFor="">Full name</label>
                                <input type="text" placeholder='your full name' className='updateinput'value={name} onChange={(e) => setName (e.target.value)} />
                            </div>
                    
                            <div className="updateitem">
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder='your email' className='updateinput' value={email} onChange={(e) => setEmail (e.target.value)}/>
                            </div>
                            <div className="updateitem">
                                <label htmlFor="">Contact</label>
                                <input type="text" placeholder='Your contact' className='updateinput'value={contact} onChange={(e) => setContact (e.target.value)} />
                                </div>
                                <div className="updateitem">
                                <label htmlFor="">Gender</label>
                                <input type="Gender" placeholder='Male/Female' className='updateinput'  name="username"value={gender} onChange={(e) => setGender (e.target.value)}/>
                            </div>
                            
                            <div className="updateitem">
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder='your address' className='updateinput' value={address} onChange={(e) => setAddress (e.target.value)}/>
                            </div>
                            <div className="updateitem">
                                <label htmlFor="">Transaction</label>
                                <input type="numbeer" placeholder='Amount' className='updateinput'  name="username"value={transaction} onChange={(e) => setTransaction (e.target.value)}/>
                            </div>
                        </div>
                        <div className="updateright">
                            <div className="upload">
                                <img src={pic10} alt="user" style={{width:"200px",height:'200px',borderRadius:"10px",objectFit:"cover"}} />
                                <label htmlFor="file">
                                    <Publish style={{cursor:"pointer"}}/>
                                </label>
                                <input type="file"  id='file' style={{display:"none"}}/>
                                
                            </div>
                            <Link to="./users">
                            <button className="updateup"onClick={(e)=> handleSubmit(e) }>Update</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default User;
