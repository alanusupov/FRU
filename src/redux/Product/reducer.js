import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
} from "../constants/product-const";

const initialState = {
  products: [],
  addedItems: [],
  total: 0,
};

function ProductReducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case GET_PRODUCT:
      return { ...state, products: action.payload };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => action.payload !== product.id
        ),
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case ADD_TO_CART:
      let addedItem = state.products.find((item) => item.id === action.id);
      let existed_item_index = state.addedItems.findIndex((item) => action.id === item.id);
      if (existed_item_index !== -1) {
        const addedItems = [...state.addedItems];
        addedItems[existed_item_index].quantity += 1;
        return {
          ...state,
          addedItems,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = 1;
        //calculating the total
        let newTotal = state.total + addedItem.price;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }

    case REMOVE_ITEM:
      let itemToRemove = state.addedItems.find((item) => action.id === item.id);
      let new_items = state.addedItems.filter((item) => action.id !== item.id);

      //calculating the total
      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      console.log(itemToRemove);
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
      case ADD_QUANTITY:
         let naddedItem = state.addedItems.find(item=> item.id === action.id)
        naddedItem.quantity += 1 
        let nnewTotal = state.total + naddedItem.price
        return{
            ...state,
            total: nnewTotal
        }
      case SUB_QUANTITY:
       let newaddedItem = state.addedItems.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(newaddedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - newaddedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            newaddedItem.quantity -= 1
            let newTotal = state.total - newaddedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
    default:
      return state;
  }
}
export default ProductReducer;