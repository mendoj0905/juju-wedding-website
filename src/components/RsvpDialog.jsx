import React from "react";
import PropTypes from "prop-types";

import { Modal, Button } from "react-bootstrap";
import GuestList from "./GuestList"
import RsvpForm from "./RsvpForm"

const RsvpDialog = ({
  onHide,
  ...restProps
}) => {

  const newGuest = {
    name: "Justin Mendoza",
    email: "mendoj@gmail.com"
  }
  const guests = [ newGuest, newGuest ];

  return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <h1>RSVP Form</h1>
      </Modal.Header>
      <Modal.Body>
        {/* <GuestList guestList={guests} /> */}
        <RsvpForm />
        {/* {
          guests.length >= 0 && <div>
            <Button>Add Another Guest</Button> 
            <Button>Finish & Submit Guests</Button>
          </div>
        } */}
      </Modal.Body>

    </Modal>
  );
};

RsvpDialog.propTypes = {
  onHide: PropTypes.func
}

RsvpDialog.defaultProps = {
  onHide: null
}

export default RsvpDialog;