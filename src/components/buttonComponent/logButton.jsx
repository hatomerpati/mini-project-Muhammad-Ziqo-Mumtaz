import { Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LogButton = () => {
  const token = localStorage.getItem("token");
  return (
    <div>
      {!token ? (
        <Link to="/hato">
          <Button type="primary" onClick={() => {}}>
            Login
          </Button>
        </Link>
      ) : (
        <Link to="../">
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem("token");
          }}
          danger
        >
          Logout
        </Button>
        </Link>
      )}
    </div>
  );
};

export default LogButton;
