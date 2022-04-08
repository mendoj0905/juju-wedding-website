import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap"

// const LOG = input => console.log(input);

const RsvpChildrenInput = ({ guest, kids, setKids }) => {

  const [numKidInput, setNumKidInputField] = useState(() => {
    if (guest.children) return guest.children.length;
    return 0
  });

  const [tempKidArray, setTempArray] = useState(() => {
    if (guest.children) return guest.children;
    return []
  })

  const handleInputChange = (e, kid) => {
    const newKids = [...tempKidArray]
    if (kid) {
      newKids[kid.id] = e.target.value;
    }
    if (kid) {
      setKids(newKids)
      // } else {
      //   newKids.splice(kid.id, 1);
      //   setKids(newKids);
    }
  }

  const childInput = kid => {
    console.log(kid)
    return kid ? <Form.Control
      className="child-name-input"
      type="text"
      placeholder="Enter child name"
      key={kid.id}
      id={kid.id}
      value={kid.name}
      onChange={e => handleInputChange(e, kid)}
    /> : null;
  }

  const [inputArray, setInputArray] = useState(() => {
    if (tempKidArray) {
      console.log(tempKidArray)
      return [...tempKidArray].map((childName, index) => ({ id: index, name: childName })).map(childInput)
    }
    return []
  })

  const generateKidsInput = useMemo(() => {
    // console.log(tempKidArray);
    if (tempKidArray) {
      return inputArray
    }
    const emptyInputFields = [...Array(numKidInput).keys()].map(i => ({ id: i, name: '' }))
    return emptyInputFields.map(childInput)
  }, [numKidInput, childInput, tempKidArray, inputArray])

  return (
    <div className="children-dropdown">
      <Form.Select
        as="select"
        value={numKidInput}
        onChange={e => setNumKidInputField(parseInt(e.target.value, 10))}
        className="child-num-dropdown"
      >
        <option value="0">Number of Children</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </Form.Select>
      {
        numKidInput > 0 && <>{
          generateKidsInput()
        }</>
      }
    </div>
  )
}

RsvpChildrenInput.propTypes = {
  guest: PropTypes.any,
  kids: PropTypes.array,
  setKids: PropTypes.func
}

RsvpChildrenInput.defaultProps = {
  guest: null,
  kids: [],
  setKids: null
}

export default RsvpChildrenInput;