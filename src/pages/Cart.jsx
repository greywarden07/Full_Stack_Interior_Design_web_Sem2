import React, { useState } from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [subtotal, setSubtotal] = useState(parseInt(totalAmount,10));

  const handleIncreaseSubtotal = (amount) => {
    setSubtotal(subtotal + parseInt(amount,10));
  };

  const handleDecreaseSubtotal = (amount) => {
    setSubtotal(subtotal - parseInt(amount,10));
  };

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No item added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image </th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                      <th>Change Qty</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr
                        item={item}
                        key={index}
                        handleIncreaseSubtotal={handleIncreaseSubtotal}
                        handleDecreaseSubtotal={handleDecreaseSubtotal}
                      />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">Rs {subtotal}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                Taxes and shipping will be calculated during checkout.
              </p>
              <div>
                <button className="buy__btn w-100">
                  <Link to="/checkout">Checkout</Link>
                </button>
                <button className="buy__btn w-100 mt-3">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item, handleIncreaseSubtotal, handleDecreaseSubtotal }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
    handleDecreaseSubtotal(item.price * item.quantity); // Decrease subtotal by item price multiplied by quantity
    console.log( item.quantity)
  };

  const [qty, setQty] = useState(item.quantity);

  const incre = () => {
    setQty(qty + 1);
    handleIncreaseSubtotal(item.price); // Increase subtotal by item price
  };

  const decre = () => {
    setQty(qty - 1);
    handleDecreaseSubtotal(item.price); // Decrease subtotal by item price
  };

  return (
    <>
      <tr>
        <td>
          <img src={item.imgUrl} alt="" />
        </td>
        <td>{item.productName}</td>
        <td>Rs {item.price}</td>
        <td>{qty}px</td>
        <td>
          <motion.i
            whileTap={{ scale: 1.2 }}
            onClick={deleteProduct}
            className="ri-delete-bin-line"
          ></motion.i>
        </td>
        <td>
          <button onClick={qty === 0 ? "" : decre} className="btn btn-primary mx-1">
            -
          </button>
          <button onClick={incre} className="btn btn-primary mx-1">
            +
          </button>
        </td>
      </tr>
    </>
  );
};

export default Cart;