import React, { useCallback } from "react";
import PropTypes from "prop-types";

import { Modal } from "react-bootstrap";
import axios from "axios";

import GuestList from "./GuestList";
import RsvpForm from "./RsvpForm";

const RsvpDialog = ({
  onHide,
  guests,
  guestName,
  setGuests,
  setGuestName,
  ...restProps
}) => {

  // TODO Move to guest api function
  const baseWeddingApiUrl = 'https://api.wedding.justinmendoza.net';
  const getAllGuests = '/api/guests';
  const tokenApi = '/api/auth/token';
  const username = 'admin';
  const password = 'm@x5n0wR0xy';

  const searchRsvp = useCallback(async e => {

    e.preventDefault();
    
    // TODO Move to guest api function
    const tokenBody = { username, password };
    const tokenResponse = await axios.post(baseWeddingApiUrl + tokenApi, tokenBody)
    const token = tokenResponse.data.token;
    const config = {
      headers: { 'Authorization': token }
    }
    const guestsResponse = await axios.get(baseWeddingApiUrl + getAllGuests, config);
    const guestsList = guestsResponse.data;

    if (await guestName) {
      setGuests(guestsList);
    }
  }, [ guestName, setGuests ]);

  const submitGuest = useCallback(async e => {
    e.preventDefault();
    setGuests([])
    setGuestName('')
    onHide()
  }, [ onHide, setGuestName, setGuests ])


  return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      centered
      fullscreen="true"
    >
      <Modal.Header closeButton>
        <h1>RSVP</h1>
      </Modal.Header>
      <Modal.Body>
        {!guests.length && <RsvpForm searchRsvp={searchRsvp} setGuestName={setGuestName}/>}
        {guests.length > 0 && <GuestList guestList={guests} submitGuest={submitGuest} />}
      </Modal.Body>

    </Modal>
  );
};

RsvpDialog.propTypes = {
  onHide: PropTypes.func,
  guests: PropTypes.array,
  guestName: PropTypes.string,
  setGuests: PropTypes.func,
  setGuestName: PropTypes.func

}

RsvpDialog.defaultProps = {
  onHide: null,
  guests: [],
  guestName: '',
  setGuests: null,
  setGuestName: null

}

export default RsvpDialog;