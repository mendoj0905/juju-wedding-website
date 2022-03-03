import React from "react";
// import PropTypes from "prop-types";

import { Button, Form } from "react-bootstrap";
import "./RsvpForm.scss";

const RsvpForm = () => {
  return (
    <Form className="rsvp-form-box">
      <h2>Guest Information</h2>
      <input type="text" id="name" placeholder="Name"/>
      <input type="text" id="email" placeholder="E-mail"/>
      <input type="text" id="phone" placeholder="Phone Number"/>
      
      <Button>Search</Button>
    </Form>
  )
}

export default RsvpForm;
