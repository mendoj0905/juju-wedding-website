/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap"

import RsvpGuestList from "./Rsvp/RsvpGuestList";
import RsvpPlusOne from "./Rsvp/RsvpPlusOne"
import RsvpChildrenInput from "./Rsvp/RsvpChildrenInput"
import './RsvpResults.scss';

const RsvpResults = ({
  guest,
  guestMembers,
  submitGuest,
  email,
  setEmail,
  setPlusOneGuest,
}) => {

  return (
    <Form className="rsvp-form">
      {
        guestMembers.length > 0 && <RsvpGuestList guestMembers={guestMembers} />
      }
      {
        guest.plusOne && <RsvpPlusOne setPlusOneGuest={setPlusOneGuest} />
      }
      {
        guest.childrenAttending &&
        <RsvpChildrenInput
          guest={guest}
        />
      }
      <div className="event-summary">
        <h2>Event Summary</h2>
        <p>Get updates of these events to your inbox.</p>
        <Form.Control
          className="rsvp-text-field"
          type="text"
          id="email"
          placeholder="E-mail"
          value={email || ''}
          onChange={e => setEmail(e.target.value)}
        />
        <Button onClick={submitGuest}>Submit</Button>
      </div>
    </Form>
  )
}

RsvpResults.propTypes = {
  guest: PropTypes.any,
  guestMembers: PropTypes.array,
  submitGuest: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  setPlusOneGuest: PropTypes.func,
}

RsvpResults.defaultProps = {
  guest: {},
  guestMembers: [],
  submitGuest: null,
  email: '',
  setEmail: null,
  setPlusOneGuest: null,
}

export default RsvpResults;

