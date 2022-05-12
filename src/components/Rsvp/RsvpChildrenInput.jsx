import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap"

const ChildInput = ({ kid, guest }) => {

  const [kidName, setKidName] = useState(() => {
    if (kid) return kid.name;
    return ""
  });

  const updateKid = useCallback(e => {
    const childrenArray = [...guest.children] || []
    const name = e.target.value
    setKidName(name)
    if (name) {
      childrenArray[kid.id] = name
      guest.children = childrenArray
    }
  }, [guest, kid])

  return <Form.Control
    className="child-name-input"
    type="text"
    placeholder="Enter child name"
    key={kid.id}
    id={kid.id}
    value={kidName}
    onChange={updateKid}
  />
}

ChildInput.propTypes = {
  kid: PropTypes.object,
  guest: PropTypes.object,
}

ChildInput.defaultProps = {
  kid: "",
  guest: {},
}

const RsvpChildrenInput = ({ guest }) => {

  const [numKidInput, setNumKidInputField] = useState(() => {
    if (guest.children) return guest.children.length;
    return 0
  });

  const [kidsArray, setKidsArray] = useState(() => {
    if (guest.children) return [...guest.children].map((childName, index) => ({ id: index, name: childName }));
    return []
  })

  const dropDownChange = e => {
    const numKids = parseInt(e.target.value, 10)
    const emptyInputFields = [...Array(numKids).keys()].map(i => ({ id: i, name: '' }))
    setNumKidInputField(numKids)
    setKidsArray(emptyInputFields)
  }

  const generateKidsInput = useCallback(() => {
    const emptyInputFields = [...Array(numKidInput).keys()].map(i => ({ id: i, name: '' }))
    if (guest.children) {
      return kidsArray.map(kid => {
        return <ChildInput
          kid={kid}
          guest={guest}
          key={kid.id}
        />
      })
    }
    return emptyInputFields.map(kid => {
      return <ChildInput
        kid={kid}
        guest={guest}
        key={kid.id}
      />
    })
  }, [guest, kidsArray, numKidInput])

  return (
    <div className="children-dropdown">
      <Form.Select
        as="select"
        value={numKidInput}
        onChange={dropDownChange}
        className="child-num-dropdown"
      >
        <option value="0">Number of Children</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </Form.Select>
      {
        numKidInput > 0 && generateKidsInput()
      }
    </div>
  )
}

RsvpChildrenInput.propTypes = {
  guest: PropTypes.any,
}

RsvpChildrenInput.defaultProps = {
  guest: null,
}

export default RsvpChildrenInput;