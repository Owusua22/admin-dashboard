import React, { Fragment } from 'react';
import { Table , Button} from "react-bootstrap";
import Customers from './Customers';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate , Link} from "react-router-dom";
import "./UserList.css";
import pic4 from "../Assets/user6.png"

const UserList = () => {
    let history = useNavigate()
   
    const handleEdit = (id , name,email, contact, gender,address,transaction) =>{
        localStorage.setItem("Name" , name)
        localStorage.setItem("Id" , id)
        localStorage.setItem("Email" , email)
        localStorage.setItem("Contact" , contact)
        localStorage.setItem("Gender" , gender)
        localStorage.setItem("Address" , address)
        localStorage.setItem("Transaction" , transaction)
    }
    const handleDelete = (id) =>{
        let index =Customers.map(function(e){
            return e.id
        }).indexOf(id)
        Customers.splice(index,1)
        history("./")
    }
    return (
        <Fragment>
        <div className='userList'>
          <h1 style={{marginLeft:"620px"}}>List of Customers</h1>

            <Table striped bordered hover size="sm" style={{marginLeft:"280px", borderColor:"black"}}>
      <thead>
        <tr style={{color:"#d57777", textAlign:"center", fontWeight:"bold"}}>
          <th> USER ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>CONTACT NUMBER</th>
          <th>GENDER</th>
          <th>ADDRESS</th>
          <th>TRANSACTIONS</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
    {
Customers && Customers.length > 0 ? 
Customers.map((item) =>{
    return(
        <tr style={{textAlign:"center"}} >
            <td>
                {item.id}
            </td>
            <td className='customer'>  
                <img src={pic4} alt="customer pic" />

            
                {item.Name}
            </td>
            <td>
                {item.Email}
            </td>
            <td>
                {item.Contact}
            </td>
            <td>
                {item.Gender}

            </td>
            <td>
                {item.Address}
            </td>
            <td>
                {item.Transaction}
            </td>

            <td>
                
                <Link to ="/users/user/:userId">
                
            <Button variant="info" onClick={() => handleEdit(item.id, item.Name, item.Email, item.Contact,item.Gender,item.Address,item.Transaction)} style={{marginRight:"20px", marginLeft:"20px"}}className="listbutton">Edit</Button>
            </Link>
            <Button variant="danger" onClick={() => handleDelete(item.id)} style={{marginRight:"10px"}} className="listbutton">Delete</Button>
            </td>
        </tr>
    )
})
:"No data available"

    }
      
      </tbody>
    </Table>
    <br />
    <Link to ="./user/newuser">
    <Button variant="primary" size="lg" style={{marginLeft:"630px"}}>
          Add New Customer
        </Button>
        </Link>

        </div>

        </Fragment>
    )
}

export default UserList;
