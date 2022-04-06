/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap"

const RsvpChildrenInput = ({ kids, setKids }) => {
  const [numKidInput, setNumKidInputField] = useState(0);
  const [inputFields, setInputFields] = useState([]);

  const handleInputChange = (event, kid) => {
    event.preventDefault();
    console.log(kid.id, kid.name);
    if(kid.id) {
      kids[kid.id] = event.target.value;
      console.log(kids);
      setKids(kids);
    } else {
      kids.splice(kid.id, 1);
    }
  }

  const childInput = kid => 
    <Form.Control 
      className="child-name-input" 
      type="text" 
      placeholder="Enter child name"
      key={kid.id}
      id={kid.id} 
      value={ kid.name }
      onChange={ handleInputChange(event, kid) }
    />

  const generateKidsInput = () => {
    if (kids.length > 0) {
      console.log('crap')
      const kidsInputFields = [...kids].map((k, index) => ({ id: index, name:k }))
      return kidsInputFields.map(childInput); 
    }

    const emptyInputFields = [...Array(numKidInput).keys()].map(i => ({ id: i, name: ''}))
    // setInputFields(emptyInputFields)
    return emptyInputFields.map(childInput) 
  }

  // useEffect(() => {
  //   if(kids.length > 0) {
  //     setNumKidInputField(kids.length)
  //     const kidsInputFields = [...kids].map((k, index) => ({ id: index, name:k }))
  //     setInputFields(kidsInputFields)
  //     // generateKidsInput()
  //   }
    
  // }, [ kids ]);

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
  kids: PropTypes.array,
  setKids: PropTypes.func
}

RsvpChildrenInput.defaultProps = {
  kids: [],
  setKids: null
}

export default RsvpChildrenInput;