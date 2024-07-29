import React, { useState } from "react";
import { Card, Container, InputGroup, Form, Button } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [usernameerror, setusernameerror] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  let user_info = JSON.parse(localStorage.getItem("user_info"));
  console.log(user_info);

  const handlelogin = () => {
    if (username === user_info.name && password === user_info.password) {
      alert("login success");
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleusername = (e) => {
    let val = e.target.value;
    setusername(val);
    console.log(val);

    if (val.trim() === "") {
      setusernameerror("Username must be filled");
    } else if (val.length <= 3 || val.length > 15) {
      setusernameerror("Username must be between 3 to15 characters");
    } else {
      setusernameerror("");
    }
  };

  const handlePassword = (e) => {
    let val = e.target.value;
    setPassword(val);

    if (val.trim() === "") {
      setPasswordError("Password must be filled");
    } else if (val.length <= 3 || val.length > 8) {
      setPasswordError("Password must be between 3 to 8 characters");
    } else {
      setPasswordError("");
    }
  };

  return (
    <React.Fragment>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="pt-3 px-4" style={{ width: "25rem" }}>
          <h5 className="text-center">Login</h5>
          <InputGroup className="mb-1 mt-3">
            <InputGroup.Text className="bg-tertiary">
              <PersonIcon />
            </InputGroup.Text>
            <Form.Control
              placeholder="Username"
              value={username}
              onChange={handleusername}
            />
          </InputGroup>
          <Form.Text className="text-danger">{usernameerror}</Form.Text>
          <InputGroup className="mb-1 mt-2">
            <InputGroup.Text id="basic-addon1">
              <LockIcon />
            </InputGroup.Text>
            <Form.Control
              placeholder="Enter Password"
              value={password}
              onChange={handlePassword}
            />
          </InputGroup>
          <Form.Text className="text-danger">{passwordError}</Form.Text>
          <Button className="bg-black border-0 p-2 mt-3" onClick={handlelogin}>
            Log In
          </Button>
          <p className="text-center p-2">
            Don't have an Account?{" "}
            <span>
              <Link
                to="/"
                className="fw-bold text-decoration-none"
                style={{ color: "inherit" }}
              >
                Register
              </Link>
            </span>
          </p>{" "}
        </Card>
      </Container>
    </React.Fragment>
  );
}
