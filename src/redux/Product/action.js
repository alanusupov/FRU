import {ADD_PRODUCT, GET_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../constants/product-const';

export const getProduct = (data) =>{
  return({
    type: GET_PRODUCT,
    payload: data
  })
}

export const addNewProduct = (newProduct) =>{
  return({
    type: ADD_PRODUCT,
    payload: newProduct
  })
}
export const deleteProduct = (id) => {
  return({
    type: DELETE_PRODUCT,
    payload: id
  })
}
export const updateProduct = (data)=>{
  return({
    type:UPDATE_PRODUCT,
    payload: data
  })
}

export const addToCart = (id)=>{
  return({
    type: ADD_TO_CART,
    id
  })
}
//remove item action
export const removeItem=(id)=>{
  return{
      type: REMOVE_ITEM,
      id
  }
}
//subtract qt action
export const subtractQuantity=(id)=>{
  return{
      type: SUB_QUANTITY,
      id
  }
}
//add qt action
export const addQuantity=(id)=>{
  return{
      type: ADD_QUANTITY,
      id
  }
}