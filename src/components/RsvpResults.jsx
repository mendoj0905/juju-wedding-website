/* eslint-disable no-unused-vars */
import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap"
import './RsvpResults.scss';
import axios from "axios";

const GuestItem = ({
  guestMem,
  index,
}) => {
  const baseUrl = 'https://api.wedding.justinmendoza.net';
  const guestApi = '/api/guests';
  const guestUrl = baseUrl + guestApi;
  const searchGuests = '/search';
  const { name } = guestMem;
  const [isAttending, setAttending] = useState(async () => {
    const respGuest = await axios.post(guestUrl + searchGuests, { name: guestMem.name });
    if (respGuest.data.isAttending) {
      setAttending("yes");
    } else {
      setAttending("no")
    }
  });

  const updateAttending = useCallback(async e => {
    const newValue = e.target.value;
    setAttending(newValue);
    guestMem.isAttending = newValue === "yes";
  }, [setAttending, guestMem])

  return (
    <div className="guestItem">
      <div className="name">{name}</div>
      <div className="attending">
        <Form.Group>
          <span className="attending-label">Attending: </span>
          <Form.Check
            inline
            label="Yes"
            name={`attending-${index}`}
            type="radio"
            value="yes"
            checked={isAttending === "yes"}
            onChange={updateAttending}
          />
          <Form.Check
            inline
            label="No"
            name={`attending-${index}`}
            type="radio"
            value="no"
            checked={isAttending === "no"}
            onChange={updateAttending}
          />
        </Form.Group>
      </div>
    </div>
  )

}

GuestItem.propTypes = {
  guestMem: PropTypes.object,
  index: PropTypes.number,
}

GuestItem.defaultProps = {
  guestMem: {},
  index: null,
};

const RsvpResults = ({
  guest,
  guestMembers,
  submitGuest,
  setEmail,
  setPlusOneGuest,
}) => {
  const [plusOneInput, enablePlusOne] = useState(true);
  const [numChildren, setNumChildren] = useState(0)

  return (
    <Form className="rsvp-form">
      {guestMembers.length > 0 && <div>
        {
          guestMembers.map((guestMem, index) => {
            return <GuestItem
              guestMem={guestMem}
              index={index}
              key={guestMem._id}
            />
          })
        }
      </div>
      }
      {
        guest.plusOne &&
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
      }
      {
        guest.childrenAttending &&
        <div className="children-dropdown">
          <Form.Select
            as="select"
            value={numChildren}
            onChange={e => setNumChildren(e.target.value)}
            className="child-num-dropdown"
          >
            <option value="0">Number of Children</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Form.Select>
          {
            numChildren > 0 && <>
              {
                Array(numChildren).fill(
                  { name: "" }
                ).map((child, index) => {
                  return <Form.Control className="child-name-input" type="childName" placeholder="Enter child name" key={child} />
                })
              }
            </>
          }

        </div>
      }
      <div className="event-summary">
        <h2>Event Summary</h2>
        <p>Get updates of these events to your inbox.</p>
        <Form.Control
          className="rsvp-text-field"
          type="text"
          id="email"
          placeholder="E-mail"
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
  setEmail: PropTypes.func,
  setPlusOneGuest: PropTypes.func
}

RsvpResults.defaultProps = {
  guest: {},
  guestMembers: [],
  submitGuest: null,
  setEmail: null,
  setPlusOneGuest: null
}

export default RsvpResults;

