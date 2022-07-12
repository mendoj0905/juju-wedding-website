import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap"

import WeddingApi from "../../libs/WeddingApi";

const GuestItem = ({
  guestMem,
  index,
}) => {
  const weddingApi = new WeddingApi()
  const { name } = guestMem;
  const [isAttending, setAttending] = useState(async () => {
    const guest = await weddingApi.get(name);
    if (guest.isAttending) {
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

const RsvpGuestList = ({
  guestMembers
}) => {
  return (
    <div>
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
  )
}

RsvpGuestList.propTypes = {
  guestMembers: PropTypes.array,
}

RsvpGuestList.defaultProps = {
  guestMembers: [],
};

export default RsvpGuestList;
