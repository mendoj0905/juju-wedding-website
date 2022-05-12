import React, { useCallback, useState, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

import RsvpResults from "./RsvpResults";
import SearchRsvpForm from "./SearchRsvpForm";
import GuestApi from "../libs/GuestApi";
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

  const guestApi = useMemo(() => new GuestApi(), []);
  const [email, setEmail] = useState('');
  const [plusOneGuest, setPlusOneGuest] = useState('');
  const familyMembers = useRef(null);

  const searchRsvp = useCallback(async e => {

    e.preventDefault();
    const guestData = await guestApi.search(guestName)

    if (!guestData) {
      foundUser(true);
    }

    if (guestData) {
      familyMembers.current = guestData.familyMembers;
      setGuestMembers(guestData.familyMembers);
      setGuest(guestData);
      setEmail(guestData.email);
    }
  }, [guestName, setGuestMembers, foundUser, setGuest, guestApi]);

  const submitGuest = useCallback(async e => {
    e.preventDefault();
    if (email) {
      await guestApi.updateEmail(guest.name, email);
    }
    if (plusOneGuest) {
      await guestApi.updatePlusOne(plusOneGuest, familyMembers.current[0].name);
    }
    if (guest.children) {
      await guestApi.updateKids(guestMembers, guest.children);
    }
    await guestApi.updateMembers(guestMembers);

    setEmail('');
    setPlusOneGuest('');
    setGuestMembers([]);
    setGuestName('');
    foundUser(false);
    onHide();

  }, [onHide, setGuestName, setGuestMembers, foundUser, guestMembers, email, setEmail, guest, plusOneGuest, setPlusOneGuest, guestApi]);

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
            setPlusOneGuest={setPlusOneGuest}
            guestMembers={guestMembers}
            submitGuest={submitGuest}
            guest={guest}
            email={email}
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