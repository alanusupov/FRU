import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../redux/actions';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Axios from 'axios';
import {url} from '../helpers/url'
import { connect } from 'react-redux';
import {addNewProduct} from '../redux/actions'
import Product from './Product';

function HomePage(props) {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }

  const [productN, setProductN] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [info, setInfo] = useState('');


function addProduct(e){
  e.preventDefault();
  const data ={
    id: Date.now(),
    productN,
    price,
    info,
    image
  }
  if(productN !== '' && price !== ''){
    async function addData(){
      const res = await Axios.post(url + '/products', data)
      console.log(res);
      props.addNewProduct(data)
      setPrice('');
      setProductN('');
      setInfo('');
      setImage('');
    }addData();
  }
}

    return (
        <div className="col-lg-8 offset-lg-2">
            
            <h3>All registered users:</h3>
            {users.loading && <em>Loading users...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            {users.items &&
                <ul>
                    {users.items.map((user, index) =>
                        <li key={user.id}>
                            {user.firstName + ' ' + user.lastName}
                            {
                                user.deleting ? <em> - Deleting...</em>
                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                : <span> - <a onClick={() => handleDeleteUser(user.id)} className="text-primary">Delete</a></span>
                            }
                        </li>
                    )}
                </ul>
            }
            <p>
                <Link to="/login">Logout</Link>
            </p>


            <Container>
                <h2>Add Product</h2>
      <Form onSubmit={(e)=>addProduct(e)}>
    
      <FormGroup>
        <Label for="Product Name">Product Name</Label>
        <Input 
        value={productN} 
        onChange={(e)=> setProductN(e.target.value)} 
        type="text" name="product" id="Product Name" placeholder="Enter the Product Name" />
      </FormGroup>
      <FormGroup>
        <Label for="price">Price</Label>
        <Input 
        value={price}
         onChange={(e)=> setPrice(e.target.value)} 
         type="text" name="price" id="price" placeholder="Enter the Price" />
      </FormGroup>
      <FormGroup>
        <Label for="info">Product Info</Label>
        <Input 
        value={info}
         onChange={(e)=> setInfo(e.target.value)} 
         type="text" name="info" id="info" placeholder="Enter the Product Information" />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image URL</Label>
        <Input 
        value={image}
         onChange={(e)=> setImage(e.target.value)} 
         type="text" required name="image" id="image" placeholder="Enter the Image URL" />
      </FormGroup>
      
      <Button className="mb-5 mt-2" style={{background: 'black'}} type="submit">Submit</Button>
    </Form>
    <Product dis={"block"} />

    </Container>
        </div>

            
    );
}

export default connect(null, {addNewProduct})(HomePage) ;