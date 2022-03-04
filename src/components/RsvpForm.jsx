import React from "react";
import PropTypes from "prop-types";

import { Button, Form } from "react-bootstrap";
import "./RsvpForm.scss";

const RsvpForm = ({
  searchRsvp,
  setGuestName
}) => {
  return (
    <Form className="rsvp-form-box">
      <h2>Enter the name on your invitation</h2>
      <input 
        type="text" 
        id="name" 
        placeholder="Name"
        onChange={ e => setGuestName(e.target.value) }
      />
      <Button onClick={ searchRsvp }>Find RSVP</Button>
    </Form>
  )
}

RsvpForm.propTypes = {
  searchRsvp: PropTypes.func,
  setGuestName: PropTypes.func
}

RsvpForm.defaultProps = {
  searchRsvp: null,
  setGuestName: null
}

export default RsvpForm;
