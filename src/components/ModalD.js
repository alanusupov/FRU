import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getProduct
} from "../redux/actions";
import Axios from 'axios';
import { url } from '../helpers/url';

const ModalD = (props) => {
  useEffect(() => {
    Axios.get(url + "/products").then((res) => {
      const { data } = res;
      console.log(res);
      if (data) getProduct(data);
    });
  }, [getProduct]);
  console.log(props.products);
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>View Details</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Order Form</ModalHeader>
        <ModalBody>
        <img src={props.products.img}></img>
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
  let { products } = state.ProductReducer;
  return { products };
};

export default connect(mapStateToProps, getProduct)(ModalD);