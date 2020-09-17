import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Card, ListGroup, CardColumns } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import Pagination from "@material-ui/lab/Pagination";
import { connect } from "react-redux";

import {
  getProduct,
  addNewProduct,
  deleteProduct,
  updateProduct,
  addToCart,
} from "../redux/actions";
import Axios from "axios";
import { url } from "../helpers/url";
import { Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import usePagination from "./Pagination";

function Product({ getProduct, ...props }) {
  const [productN, setProductN] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [isEdit, setIsEdit] = useState();

  useEffect(() => {
    Axios.get(url + "/products").then((res) => {
      const { data } = res;
      console.log(res);
      if (data) getProduct(data);
    });
  }, [getProduct]);
  console.log(props.products);

  function delData(id, e) {
    async function delProduct(id) {
      const res = await Axios.delete(url + `/products/${id}`);
      console.log(res);
      props.deleteProduct(id);
    }
    delProduct(id);
  }
  function EditData(id, productN, price, info) {
    setProductN(productN);
    setPrice(price);
    setInfo(info);
    if (isEdit !== id) {
      setIsEdit(id);
    } else {
      setIsEdit("");
    }
  }
  function saveData(id) {
    const data = {
      id,
      productN,
      price,
      info,
    };
    setIsEdit("");

    async function saveProduct(id) {
      const res = await Axios.patch(url + `/products/${id}`, data);
      props.updateProduct(res.data);
      console.log(res.data);
    }
    saveProduct(id);
  }
  function addCart(id) {
    props.addToCart(id);
  }
  const history = useHistory();
  console.log(props.products);
  function handleClick(id, e) {
    e.stopPropagation();
    console.log("clicked");
    history.replace("/products/" + id);
  }
  //Paginationnnnnn!!
  let [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const count = Math.ceil(props.products.length / PER_PAGE);
  const _DATA = usePagination(props.products, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  // search bar
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const filteredProducts = props.products.filter((product) => {
    return product.productN.toLowerCase().match(input);
  });
  const handleInputChange = (e) => {
    e.preventDefault(
        setInput(e.target.value)
    )
};
  return (
    <Container>
      {console.log("Product id", props)}
      <h1>Our Collection</h1>
      <Input
        onChange={handleInputChange}
        value={input}
        className="form-control"
        type="text"
        placeholder="Search Products"
        
      />
      <ul className="searchList">
        {filteredProducts.map((item, id) => {
          return input !== "" ? (
            <li key={id} onClick={(e) => handleClick(item.id, e)}>
              {item.title}
              <img
                className="searchListImage"
                src={item.image}
                alt={item.productN}
              />
              {item.productN}
            </li>
          ) : null;
        })}
      </ul>
      <CardColumns className="mt-3">
        {props.products ? (
          _DATA.currentData().map((product) => (
            <Card
              key={product.id}
              className="mt-3"
              style={{ width: "18rem", backgroundColor: "#151515" }}
            >
              <Card.Img
                onClick={(e) => handleClick(product.id, e)}
                variant="top"
                src={product.image}
              />
              <Card.Body>
                <Card.Title className="text-white">
                  {product.productN}
                </Card.Title>
                <Card.Text className="text-white">
                  Price: {product.price}$
                </Card.Text>
                <Card.Text className="text-white">{product.info}</Card.Text>

                {isEdit === product.id ? (
                  <div>
                    <Input
                      value={productN}
                      onChange={(e) => setProductN(e.target.value)}
                      className="w-50"
                    />
                    <Input
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-50"
                    />

                    <Input
                      value={info}
                      onChange={(e) => setInfo(e.target.value)}
                      className="w-50"
                    />
                    <button
                      onClick={() => saveData(product.id)}
                      className="btn btn-warning btn mr-3"
                    >
                      save
                    </button>
                  </div>
                ) : null}
              </Card.Body>
              <ListGroup className="list-group-flush">
                <Button
                  onClick={() => delData(product.id)}
                  style={{
                    backgroundColor: "#EE0C2D",
                    borderColor: "black",
                    display: props.dis,
                  }}
                >
                  Delete
                </Button>
                <Button
                  onClick={() =>
                    EditData(
                      product.id,
                      product.product,
                      product.price,
                      product.info
                    )
                  }
                  style={{
                    backgroundColor: "#282940",
                    borderColor: "black",
                    display: props.dis,
                  }}
                >
                  Edit
                </Button>
              </ListGroup>
              <Card.Body>
                <Button
                  style={{
                    backgroundColor: "#1C175C",
                    borderColor: "white",
                    width: "100%",
                  }}
                  onClick={() => addCart(product.id)}
                  href="#"
                >
                  {" "}
                  <FaCartPlus style={{ fontSize: "20px" }} />
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Product List Is Empty</p>
        )}
      </CardColumns>
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Container>
  );
}

const mapStateToProps = (state) => {
  let { products } = state.ProductReducer;
  return { products };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, {
  getProduct,
  addNewProduct,
  deleteProduct,
  updateProduct,
  addToCart,
})(Product);
