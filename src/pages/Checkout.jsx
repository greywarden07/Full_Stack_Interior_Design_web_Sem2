import React from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/checkout.css";
import { useSelector } from "react-redux";
import StripeCheckout from 'react-stripe-checkout';

const Checkout = () => {
  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Phone number" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Street address" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="City" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Postal code" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Country" required />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>Rs {totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    free shipping
                  </span>
                  <span>Rs 0</span>
                </h6>

                <h4>
                  Total Cost: <span>Rs {totalAmount}</span>
                </h4>
               
                <StripeCheckout
        token={onToken}
        
        
        name="Multimart"
        currency="Inr"
        amount={totalAmount*100}
        stripeKey="pk_test_51NL5CFSFuNYso9ZgeeRCJAW90KKPO049b8PKaMXfdZXNWX4IpL3AfQsFpiJDbH2OsuaGacTfORInDSBNdC2RbmrC00iudP5KEB"
      >
       <button className="buy__btn auth__btn w-100">
                  Place an order
                </button>
      </StripeCheckout>
      
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
