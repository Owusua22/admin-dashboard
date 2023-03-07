import React from 'react';
import "./Widgetlg.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from "../Assets/user5.png"
import pic2 from "../Assets/user7.png"
import pic3 from "../Assets/user8.png"
import pic4 from "../Assets/user3.png"
import Button from 'react-bootstrap/Button';



const Widgetlg = () => {
   
    return (
        <div className='widgetlg'>
            <h3 className="title">
                Latest Transactions
            </h3>
            <Table striped bordered hover style={{width:'650px', marginLeft:""}}>
      <thead>
        <tr style={{fontSize:"22px", textAlign:"center"}}>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status </th>
        </tr>
      </thead>
      <tbody>
        <tr className='tr'>
          <td>
            <img src={pic1} alt="customer pic" />
            <span className="name">Willy County</span>
          </td>
          <td className='date'>2nd June 2022</td>
          <td className='amount'>Ghc2,990</td>
          <td className='status'> <Button variant="success"style={{width:"130px"}}>Approved</Button>{' '}</td>
        </tr>
        <tr className='tr'>
          <td>
            <img src={pic2} alt="customer pic" />
            <span className="name">Joselyn Atinga</span>
          </td>
          <td className='date'>23rd May 2022</td>
          <td className='amount'>Ghc3,990</td>
          <td className='status'> <Button variant="danger" style={{width:"130px"}}>Declined</Button>{' '}</td>
        </tr>
        <tr className='tr'>
          <td>
            <img src={pic3} alt="customer pic" />
            <span className="name">Patricia Goldsman</span>
          </td>
          <td className='date'>20th April 2022</td>
          <td className='amount'>Ghc1,200</td>
          <td className='status'> <Button variant="warning" style={{width:"130px"}}>Pending</Button>{' '}</td>
        </tr>
        <tr className='tr'>
          <td>
            <img src={pic4} alt="customer pic" />
            <span className="name">Henry Ford</span>
          </td>
          <td className='date'>2nd April 2022</td>
          <td className='amount'>Ghc3,990</td>
          <td className='status'> <Button variant="success"style={{width:"130px"}}>Approved</Button>{' '}</td>
        </tr>
      </tbody>
    </Table>
        </div>
    );
}

export default Widgetlg;
