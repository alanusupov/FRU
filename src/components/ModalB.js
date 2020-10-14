import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import {addOrder} from '../redux/actions'
import Axios from 'axios';
import { url } from '../helpers/url';
import { connect } from 'react-redux';

const ModalB = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  //const [productN,setProductN] = useState('');
  //setProductN(props.productN)

// function addOrder(e){
  
//   const data ={
//     id: Date.now(),
//     name,
//     number,
//     email,
//     address,
//   //  productN

//   }
//   if(name !== '' && email !== ''){
//     async function addData(){
//       const res = await Axios.post(url + '/orders', data)
//       console.log(res);
//       props.addOrder(data)
//       setName('');
//       setNumber('');
//       setEmail('');
//       setAddress('');
//     }addData();
//   }
// }
// props.addedItems.map(item => {
//  setProductN(item.productN)
// })

  return (
    
    <div>{console.log(props.addedItems)}
      <Button color="danger" onClick={toggle}>Order</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Order Form</ModalHeader>
        <ModalBody>
        <Form onSubmit={(e)=>addOrder(e)}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input 
        onChange={(e)=> setName(e.target.value)}
        type="name" name="name" id="name" placeholder="Enter your Name" />
      </FormGroup>
      <FormGroup>
        <Label for="number">Number</Label>
        <Input 
        onChange={(e)=> setNumber(e.target.value)}
         type="number" name="number" id="number" placeholder="Enter your Number" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
        onChange={(e)=> setEmail(e.target.value)}
           type="email" name="email" id="exampleEmail" placeholder="Enter Your Email" />
      </FormGroup>
      <FormGroup>
        <Label for="Address">Address</Label>
        <Input 
        onChange={(e)=> setAddress(e.target.value)}
        type="text" name="address" id="address" placeholder="Enter Your Address" />
      </FormGroup>
      
         
      
    </Form>
        </ModalBody>
        <ModalFooter>
         <Link to="/payment" className="btn" type="submit" color="primary" onClick={toggle}>Submit</Link>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
const mapStateToProps = (state) => {
  let { addedItems } = state.ProductReducer;
  return { addedItems };
};

export default connect(mapStateToProps, {addOrder})(ModalB);