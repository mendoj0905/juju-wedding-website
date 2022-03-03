import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap"

const GuestItem = ({
  guest,
}) => {

  return (
    <div className="guestItem">
      <p>{guest.firstName} {guest.lastName} - {guest.email} - <Button>Remove</Button></p>
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
}) => {
  return (
    <>
      { guestList.length > 0 && <div>
          {
            guestList.map((guest) => {
              return <GuestItem guest={guest} key={guest}/>
            })
          }  
        </div>
      }
    </>
  )
}

GuestList.propTypes = {
  guestList: PropTypes.array,
}

GuestList.defaultProps = {
  guestList: []
}

export default GuestList;

