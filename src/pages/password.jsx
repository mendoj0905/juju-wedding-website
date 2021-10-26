import React from "react";
import { Button } from "react-bootstrap";
import "../style/main.scss";

const Password = () => (
  <div>
    <form>
      <h1>Enter Password</h1>
      <input type="password" name="password" />
      <p><Button size="l" variant="primary" className="text-uppercase">
        Submit
      </Button></p>
    </form>
  </div>
);

export default Password;