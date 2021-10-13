import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import BillingForm from "@components/checkout/BillingForm";
import OrderDetails from "@components/checkout/OrderDetails";

const CheckoutPageContent = () => {
  return (
    <Container className="container-fluid-custom-mobile-padding">
      <h1 className="tt-title-subpages noborder">CHECKOUT</h1>

      <Row>
        <Col lg={6}>
          <BillingForm />
        </Col>

        <Col lg={6} xl={5} className="ml-auto">
          <OrderDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPageContent;
