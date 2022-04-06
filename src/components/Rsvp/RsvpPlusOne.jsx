/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap"

const RsvpPlusOne = ({ setPlusOneGuest }) => {
  const [plusOneInput, enablePlusOne] = useState(true);
  return (
    <div className="plus-one">
      <span className="plus-one-label">Plus One: </span>
      <Form.Check
        inline
        label="Yes"
        name="plusOne"
        type="radio"
        onChange={e => enablePlusOne(false)}
      />
      <Form.Check
        inline
        label="No"
        name="plusOne"
        type="radio"
        onChange={e => enablePlusOne(true)}
        checked={plusOneInput}

      />
      <h3>Guest Name</h3>
      <Form.Control
        type="text"
        id="guestName"
        placeholder="Enter guest name"
        onChange={e => setPlusOneGuest(e.target.value)}
        disabled={plusOneInput} />
    </div>
  )
}

RsvpPlusOne.propTypes = {
  setPlusOneGuest: PropTypes.func
}

RsvpPlusOne.defaultProps = {
  setPlusOneGuest: null
}

export default RsvpPlusOne;