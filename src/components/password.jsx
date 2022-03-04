import React from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

import "./password.scss"

const Password = ({
  show,
  onHide,
  setPassword,
  isWrongPassword,
}) => {

  return (
    <Modal show={show} fullscreen="true" size="xl" onHide={onHide} className="password-modal" centered>
      <Modal.Header className="password-modal-header">
        <h1>Please Enter Our Password</h1>
      </Modal.Header>
      <Modal.Body className="password-modal-body">
        <form className="password-form">
          
          <div className="password-input">
            <input 
              type="password" 
              name="password" 
              autoComplete="current-password"
              onChange={ () => setPassword(event.target.value) }
              />
          </div>

          <div className="password-submit">
            <Button onClick={onHide}>Enter</Button>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="password-modal-footer">
        {isWrongPassword && <h2>Please Enter Password!</h2>}
      </Modal.Footer>
      
    </Modal>
  );
};

Password.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.any,
  isWrongPassword: PropTypes.bool,
  setPassword: PropTypes.func
}

Password.defaultProps = {
  show: null,
  onHide: null,
  isWrongPassword: null,
  setPassword: null
}

export default Password;