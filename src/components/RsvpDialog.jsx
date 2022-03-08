import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import { Modal } from "react-bootstrap";
import axios from "axios";

import RsvpResults from "./RsvpResults";
import SearchRsvpForm from "./SearchRsvpForm";
import "./RsvpDialog.scss";

const RsvpDialog = ({
  onHide,
  guest,
  setGuest,
  guestName,
  setGuestName,
  noUserFound,
  foundUser,
  guestMembers,
  setGuestMembers,
  ...restProps
}) => {

  const [email, setEmail] = useState('');
  const [plusOneGuest, setPlusOneGuest] = useState('');
  const [children, setChildren] = useState([]);
  const baseUrl = 'https://api.wedding.justinmendoza.net';
  const guestApi = '/api/guests'
  const url = baseUrl + guestApi;
  const searchGuests = '/search';
  const updateRsvp = '/rsvp'

  const updateMembers = useCallback(async (members) => {
    console.log(`Updating member isAttending field`);
    console.log(members);
    // members.forEach(async member => {
    //   await axios.patch(baseUrl+guestApi+updateRsvp,{ name: member.name, isAttending: member.isAttending });
    // });
  }, [])

  const searchRsvp = useCallback(async e => {

    e.preventDefault();
    
    const guestsResponse = await axios.post(url+searchGuests, { name: guestName });
    const guestFound = guestsResponse.data;

    if(!guestFound.sucess) {
      foundUser(true);
    }

    if(guestFound) {
      setGuestMembers(guestFound.familyMembers);
      setGuest(guestFound);
    } 
  }, [ guestName, setGuestMembers, foundUser, setGuest, url ]);

  const submitGuest = useCallback(async e => {
    e.preventDefault();
    if (email) {
      console.log(`Updating ${guest.name} - ${email} `);
      const updateEmailData = { name:guest.name, email }
      console.log(JSON.stringify(updateEmailData));
    }    
    updateMembers(guestMembers)
    setEmail('')
    setGuestMembers([])
    setGuestName('')
    foundUser(false)
    onHide()
  }, [ onHide, setGuestName, setGuestMembers, foundUser, guestMembers, updateMembers, email, setEmail, guest ])

  return (
    <Modal
      className="rsvp-modal"
      {...restProps}
      onHide={onHide}
      size="xl"
      centered
      fullscreen="true"
    >
      <Modal.Header closeButton>
        <h1>RSVP</h1>
      </Modal.Header>
      <Modal.Body>
        {
          !guestMembers.length && 
          <SearchRsvpForm 
            searchRsvp={searchRsvp} 
            setGuestName={setGuestName} 
            noUserFound={noUserFound} 
          />
        }
        {
          guestMembers.length > 0 && 
          <RsvpResults 
            setGuestMembers={setGuestMembers}
            guestMembers={guestMembers} 
            submitGuest={submitGuest} 
            guest={guest}
            setEmail={setEmail}
          />
        }
      </Modal.Body>

    </Modal>
  );
};

RsvpDialog.propTypes = {
  onHide: PropTypes.func,
  guest: PropTypes.any,
  setGuest: PropTypes.func,
  guestName: PropTypes.string,
  setGuestName: PropTypes.func,
  noUserFound: PropTypes.bool,
  foundUser: PropTypes.func,
  guestMembers: PropTypes.array,
  setGuestMembers: PropTypes.func,
}

RsvpDialog.defaultProps = {
  onHide: null,
  guest: {},
  setGuest: null,
  guestName: '',
  setGuestName: null,
  noUserFound: false,
  foundUser: null,
  guestMembers: [],
  setGuestMembers: null,
}

export default RsvpDialog;