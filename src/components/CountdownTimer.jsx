import React from 'react';
import PropTypes from "prop-types";

import useCountdown from 'hooks/useCountdown'
import { Button, Row, Col } from 'react-bootstrap';
import './CountdownTimer.scss'

const ExpiredNotice = () => {
  return (
    <div>
      <h3>Day of Wedding</h3>
      <Button>Event Details</Button>
    </div>
  )
}

const CountdownNumber = (number, type) => {
  
  return (
    <Col>
      <div className="countdown-label mx-auto">
        <h4>{number}</h4>
        <p>{type}</p>
      </div>
    </Col>
  )
}

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds ] = useCountdown(targetDate);
  const timeLabels = [ 'days', 'hours', 'minutes', 'seconds' ]

  if (days + hours + minutes + seconds <= 0 ) {
    return (
      <ExpiredNotice />
    )
  } 

  return (
    <Row xs={2} sm={4} lg={4} className='countdown mx-auto'>
      {
        [days, hours, minutes, seconds ].map( (time, index) => CountdownNumber(time, timeLabels[index]))
      }
    </Row>
  )
}

CountdownTimer.propTypes = {
  targetDate: PropTypes.any
}

CountdownTimer.defaultProps = {
  targetDate: null
}

export default CountdownTimer;