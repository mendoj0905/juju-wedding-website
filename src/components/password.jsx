import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { setWeddingSession, getPassword } from '../utils/passwordUtil'

import "../style/main.scss";
import "./password.scss"

const Password = () => {

  const [password, setPassword] = useState('');
  const [isWrongPassword, setWrongPassword] = useState(false)

  const onSubmit = async event => {
    event.preventDefault();
    const isPasswordValid = await getPassword(password);
    if (isPasswordValid) {
      setWeddingSession();
      window.location.reload();
    } else {
      setWrongPassword(!isPasswordValid);
    }
  };

  return (
    <div className="password-container">
      <form onSubmit={onSubmit} className="password-form">
        <h2>Please Enter Our Password</h2>
        <div className="password-input">
          <input 
            type="password" 
            name="password" 
            autoComplete="current-password"
            value={password}
            onChange={event => { setPassword(event.target.value) }}/>
        </div>

        <div className="password-submit">
          <Button 
            type='submit'
            >
              Enter
          </Button>
        </div>
        {isWrongPassword && <h3>Opps wrong password!</h3>}
      </form>
    </div>
  );
};

export default Password;