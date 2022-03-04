import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap"

const GuestItem = ({
  guest,
}) => {

  return (
    <div className="guestItem">
      <p>{guest.firstName} {guest.lastName} - Attending? <input type="checkbox"/></p>
    </div>
  )

}

GuestItem.propTypes = {
  guest: PropTypes.object,
}

GuestItem.defaultProps = {
  guest: {},
};

const GuestList = ({ 
  guestList,
  submitGuest,
}) => {
  return (
    <>
      { guestList.length > 0 && <div>
          {
            guestList.map((guest) => {
              return <GuestItem guest={guest} key={guest.id}/>
            })
          }  
        </div>
      }
      <h2>Event Summary</h2>
      <p>Get updates of these events to your inbox.</p>
      <input type="text" id="email" placeholder="E-mail"/>
      <Button onClick={ submitGuest }>Submit</Button>
    </>
  )
}

GuestList.propTypes = {
  guestList: PropTypes.array,
  submitGuest: PropTypes.func,
}

GuestList.defaultProps = {
  guestList: [],
  submitGuest: null
}

export default GuestList;

