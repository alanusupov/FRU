import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const ModalB = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Order</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Order Form</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input 
        type="name" name="name" id="name" placeholder="Enter your Name" />
      </FormGroup>
      <FormGroup>
        <Label for="number">Number</Label>
        <Input 
         type="number" name="number" id="number" placeholder="Enter your Number" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
           type="email" name="email" id="exampleEmail" placeholder="Enter Your Email" />
      </FormGroup>
      <FormGroup>
        <Label for="Address">Address</Label>
        <Input 
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

export default ModalB;