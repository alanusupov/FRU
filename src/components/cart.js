import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, addQuantity, subtractQuantity } from "../redux/actions";
import { Card, CardColumns, Container} from "reactstrap";
import ModalB from './ModalB'
class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };
  
  render() {
    console.log(this.props);
    let addedItems = this.props.addedItems.length !== 0 ? (
      this.props.addedItems.map((item) => {
        return (
          <Container>
            <CardColumns>
            <Card className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img className="cardimg" src={item.image} alt={item.image} />
            </div>
            <div className="item-desc">
              <span className="title">{item.product}</span>
              <p>{item.info}</p>
              <p>
                <b>Price: {item.price}$</b>
              </p>
              <p>Quantity: {item.quantity}</p>
              <div className="add-remove">
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  >
                   Add + 
                  </i>
                </Link>
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  >
                    Remove -
                  </i>
                </Link>
              </div>
              <button
                className="waves-effect waves-light btn pink remove"
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div> 
          </Card>
          </CardColumns>
          
          </Container>
          
          
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
          
        </div>
        <ModalB/>
      </div>
    );
  }
}
const mapStateToProps = (state) => state.ProductReducer ;
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
