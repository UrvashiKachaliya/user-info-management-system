import React, { useState } from "react";
import { Card, Container, InputGroup, Form, Button } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Link, useNavigate } from "react-router-dom";

export default function Registration() {
  const [username, setusername] = useState("");
  const [usernameerror, setusernameerror] = useState("");

  const [email, setemail] = useState("");
  const [emailerror, setemailerror] = useState("");

  const [contact, setContact] = useState("");
  const [contactError, setContactError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [repeatPassword, setRepeatPassword] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const navigate = useNavigate();

  const handleusername = (e) => {
    let val = e.target.value;
    setusername(val);
    console.log(val);

    if (val.trim() === "") {
      setusernameerror("Username must be filled");
    } else if (val.length <= 3 || val.length > 8) {
      setusernameerror("Username must be between 3 to10 characters");
    } else {
      setusernameerror("");
    }
  };

  const handleemail = (e) => {
    let val = e.target.value;
    setemail(val);

    if (val.trim() === "") {
      setemailerror("Email must be filled");
    } else {
      setemailerror("");
    }
  };

  const handleContact = (e) => {
    let val = e.target.value;
    setContact(val);

    if (val.trim() === "") {
      setContactError("Contact number must be filled");
    } else if (!/^\d{10}$/.test(val)) {
      setContactError("Contact number must be exactly 10 digits");
    } else {
      setContactError("");
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

  const handleRepeatPassword = (e) => {
    let val = e.target.value;
    setRepeatPassword(val);

    if (val.trim() === "") {
      setRepeatPasswordError("Please repeat your password");
    } else if (val !== password) {
      setRepeatPasswordError("Password does not match");
    } else {
      setRepeatPasswordError("");
    }
  };

  const handleAccount = () => {
    const user_info = {
      name: username,
      email: email,
      contact: contact,
      password: password,
    };

    localStorage.setItem("user_info", JSON.stringify(user_info));
    console.log(user_info);
    alert("Registration Sucessful");
    navigate("/login");
  };

  return (
    <React.Fragment>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="pt-3 px-4" style={{ width: "25rem" }}>
          <h5 className="text-center">Registration</h5>

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
            <InputGroup.Text>
              <EmailIcon />
            </InputGroup.Text>
            <Form.Control
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={handleemail}
            />
          </InputGroup>
          <Form.Text className="text-danger">{emailerror}</Form.Text>

          <InputGroup className="mb-1 mt-2">
            <InputGroup.Text id="basic-addon1">
              <PhoneIcon />
            </InputGroup.Text>
            <Form.Control
              placeholder="Contact Number"
              value={contact}
              onChange={handleContact}
            />
          </InputGroup>
          <Form.Text className="text-danger">{contactError}</Form.Text>

          <InputGroup className="mb-1 mt-2">
            <InputGroup.Text id="basic-addon1">
              <LockOpenIcon />
            </InputGroup.Text>
            <Form.Control
              placeholder="Create Password"
              value={password}
              onChange={handlePassword}
            />
          </InputGroup>
          <Form.Text className="text-danger">{passwordError}</Form.Text>

          <InputGroup className="mb-1 mt-2">
            <InputGroup.Text id="basic-addon1">
              <LockIcon />
            </InputGroup.Text>
            <Form.Control
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={handleRepeatPassword}
            />
          </InputGroup>
          <Form.Text className="text-danger">{repeatPasswordError}</Form.Text>

          <Button
            className="bg-black border-0 p-2 mt-3"
            onClick={handleAccount}
          >
            Create Account
          </Button>
          <p className="text-center p-2">
            Have an Account?{" "}
            <span>
              <Link
                to="/login"
                className="fw-bold text-decoration-none"
                style={{ color: "inherit" }}
              >
                Log in
              </Link>
            </span>
          </p>
        </Card>
      </Container>
    </React.Fragment>
  );
}
