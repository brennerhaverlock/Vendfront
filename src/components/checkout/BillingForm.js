import React from "react";
import { Row, Col } from "react-bootstrap";

const BillingForm = () => {
  return (
    <div className="checkout-item">
      <h4>Billing Details</h4>
      <div className="billing-form-wrap form-default">
        <form>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="f_name" className="required">
                  First Name
                </label>
                <input
                  type="text"
                  id="f_name"
                  placeholder="First Name"
                  className="form-control"
                  required
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="l_name" className="required">
                  Last Name
                </label>
                <input
                  type="text"
                  id="l_name"
                  placeholder="Last Name"
                  className="form-control"
                  required
                />
              </div>
            </Col>
          </Row>
          <div className="form-group">
            <label htmlFor="email" className="required">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="com-name">Company Name</label>
            <input
              type="text"
              id="com-name"
              placeholder="Company Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country" className="required">
              Country
            </label>
            <select name="country" id="country" className="form-control">
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Armenia">Armenia</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="England">England</option>
              <option value="London">London</option>
              <option value="London">London</option>
              <option value="China">China</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="street-address" className="required">
              Street address
            </label>
            <input
              type="text"
              id="street-address"
              placeholder="Street address Line 1"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Street address Line 2 (Optional)"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="town" className="required">
              Town / City
            </label>
            <input
              type="text"
              id="town"
              placeholder="Town / City"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State / Division</label>
            <input
              type="text"
              id="state"
              placeholder="State / Division"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="postcode" className="required">
              Postcode / ZIP
            </label>
            <input
              type="text"
              id="postcode"
              placeholder="Postcode / ZIP"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              placeholder="Phone"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ordernote">Order Note</label>
            <textarea
              name="ordernote"
              id="ordernote"
              cols={30}
              rows={3}
              placeholder="Notes about your order, e.g. special notes for delivery."
              className="form-control"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingForm;
