import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios';
import { Row, Col, ButtonGroup, Button, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { url } from '../helpers/url';
import { addToCart, removeItem } from '../redux/actions';

function ProductDetails(props) {
  const params = useParams();
  const [data,setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const isInCart = (item, addedItems) =>{
   return !!addedItems.find((a)=>a.id===item.id);
    
  }
  useEffect(()=>{
    Axios.get(url + '/products/' + params.id)
    .then(({data}) => {
      setData(data);
    })
    .finally(()=>{
      setLoading(false)
    })
    
  }, [params.id])
  
  if(loading)return (<h1>Loading...</h1>)
  function addCart(id){
    props.addToCart(id)
  }
  return (
    <div>
      {/* Product Detail of {params?.id} */}
      {data ? (
        <Container >
          <div style={{maxWidth: '850px'}}>
             <Row>
          <Col md={6}>
            <img alt={data.productN} className="w-100" src={data.image}/>
          </Col>
          <Col md={6}>
            <h1>{data.productN}</h1>
            <p>{data.info}</p>
            <ButtonGroup>
              <Button color="primary">{data.price} $</Button>
              {isInCart( data, props.addedItems) ? (
                <Button color="warning" 
                  onClick={()=>props.removeItem(data.id)}
                
                >remove from cart</Button>
              ): (
                <Button onClick={()=>addCart(data.id)} color="success">Add To Cart</Button>

              )}
            </ButtonGroup>
          </Col>
        </Row>
          </div>
         
        </Container>
        
      ) : (
        <h4>Error: product {params.id} is not defined</h4>
      )}
    </div>
  )
}
const mapStateToProps = state => state.ProductReducer;

 export default connect(mapStateToProps, {addToCart, removeItem})(ProductDetails)
