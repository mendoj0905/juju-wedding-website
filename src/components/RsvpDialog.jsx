import React, { useCallback, useState, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

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
  setOpenRsvp,
  ...restProps
}) => {

  const guestApi = useMemo(() => new GuestApi(), []);
  const [email, setEmail] = useState('');
  const [plusOneGuest, setPlusOneGuest] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const familyMembers = useRef(null);

  const getGuest = useCallback(selectedGuestData => {

    setSearchResults([])

    if (selectedGuestData) {
      familyMembers.current = selectedGuestData.familyMembers;
      setGuestMembers(selectedGuestData.familyMembers);
      setGuest(selectedGuestData);
      setEmail(selectedGuestData.email);
    }

  },[familyMembers, setGuestMembers, setGuest, setEmail])

  const setSelectedGuest = useCallback(async e => {
    e.preventDefault()
    const g = await guestApi.get(e.target.innerText)
    getGuest(g)
  }, [guestApi, getGuest])

  const searchRsvp = useCallback(async e => {

    e.preventDefault();
    const searchData = await guestApi.v2Search(guestName.replace(/\s+/g, ' ').trim())

    if (!searchData) {
      foundUser(true);
      setSearchResults([])
    }

    if(searchData.length > 1) {
      setSearchResults(searchData)
    }

    if (typeof searchData === 'object' && !Array.isArray(searchData)) {
      getGuest(searchData)
    }

  }, [guestName, foundUser, guestApi, getGuest]);

  const clearRsvpModalData = useCallback(() => {
    setEmail('');
    setPlusOneGuest('');
    setGuestMembers([]);
    setGuestName('');
    setGuest({})
    foundUser(false);
    setOpenRsvp(false);
    setSearchResults([])
  }, [setEmail, setPlusOneGuest, setGuestMembers, setGuestName, foundUser, setOpenRsvp, setGuest])

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

    clearRsvpModalData()

  }, [clearRsvpModalData, guestMembers, email, guest, plusOneGuest, guestApi]);

  return (
    <Modal
      className="rsvp-modal"
      {...restProps}
      onHide={clearRsvpModalData}
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
          searchResults.length > 1 && <div>
            <ul>
              {
                searchResults.map( g => {
                  return <li key={g._id}>
                    <Button variant="link" onClick={setSelectedGuest}>{g.name}</Button>
                  </li>
                })
              }
            </ul>
          </div>
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
  setOpenRsvp: PropTypes.func,
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
  setOpenRsvp: null,
}

export default RsvpDialog;