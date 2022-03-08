import React from "react";
import PropTypes from "prop-types";

import { Button, Form } from "react-bootstrap";
import "./RsvpForm.scss";

const SearchRsvpForm = ({
  searchRsvp,
  setGuestName,
  noUserFound
}) => {
  return (
    <Form className="rsvp-form-box">
      <h2>Please enter the name on your invitation</h2>
      <Form.Control 
        type="text" 
        id="name" 
        placeholder="Name"
        onChange={ e => setGuestName(e.target.value) }
      />
      {noUserFound && <p>No guest found. Please enter name on your invitation.</p>}
      <Button onClick={ searchRsvp }>Find RSVP</Button>
    </Form>
  )
}

SearchRsvpForm.propTypes = {
  searchRsvp: PropTypes.func,
  setGuestName: PropTypes.func,
  noUserFound: PropTypes.bool
}

SearchRsvpForm.defaultProps = {
  searchRsvp: null,
  setGuestName: null,
  noUserFound: false
}

export default SearchRsvpForm;
