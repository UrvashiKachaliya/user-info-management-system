import React, { useState } from "react";
import { Card, Container, InputGroup, Form, Button } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  let storedUserInfo = JSON.parse(localStorage.getItem("user_info")) || {};

  const [userInfo, setUserInfo] = useState(storedUserInfo);
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });

    // Validation on change
    if (name === "name") {
      if (value.trim() === "") {
        setUsernameError("Username must be filled");
      } else if (value.length <= 3 || value.length > 10) {
        setUsernameError("Username must be between 3 to 10 characters");
      } else {
        setUsernameError("");
      }
    }

    if (name === "email") {
      if (value.trim() === "") {
        setEmailError("Email must be filled");
      } else {
        setEmailError("");
      }
    }

    if (name === "contact") {
      if (value.trim() === "") {
        setContactError("Contact number must be filled");
      } else if (!/^\d{10}$/.test(value)) {
        setContactError("Contact number must be exactly 10 digits");
      } else {
        setContactError("");
      }
    }

    if (name === "password") {
      if (value.trim() === "") {
        setPasswordError("Password must be filled");
      } else if (value.length <= 3 || value.length > 8) {
        setPasswordError("Password must be between 3 to 8 characters");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    {
      localStorage.setItem("user_info", JSON.stringify(userInfo));
      alert("Account information updated successfully!");
      navigate("/home");
    }
  };

  return (
    <React.Fragment>
      <Header />
      <Container className="d-flex flex-column justify-content-start mt-5 align-items-center min-vh-100">
        <Card className="pt-3 px-4 mt-5" style={{ width: "25rem" }}>
          <h5 className="text-center">Account Information</h5>
          <Form onSubmit={handleFormSubmit}>
            <InputGroup className="mb-1 mt-3">
              <InputGroup.Text className="bg-tertiary">
                <PersonIcon />
              </InputGroup.Text>
              <Form.Control
                name="name"
                placeholder="Username"
                value={userInfo.name}
                onChange={handleInputChange}
              />
            </InputGroup>
            <Form.Text className="text-danger">{usernameError}</Form.Text>
            <InputGroup className="mb-1 mt-2">
              <InputGroup.Text>
                <EmailIcon />
              </InputGroup.Text>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email Address"
                value={userInfo.email}
                onChange={handleInputChange}
              />
            </InputGroup>
            <Form.Text className="text-danger">{emailError}</Form.Text>
            <InputGroup className="mb-1">
              <InputGroup.Text>
                <PhoneIcon />
              </InputGroup.Text>
              <Form.Control
                name="contact"
                placeholder="Contact Number"
                value={userInfo.contact}
                onChange={handleInputChange}
              />
            </InputGroup>
            <Form.Text className="text-danger">{contactError}</Form.Text>
            <InputGroup className="mb-1">
              <InputGroup.Text>
                <LockOpenIcon />
              </InputGroup.Text>
              <Form.Control
                name="password"
                type="text"
                placeholder="New Password"
                value={userInfo.password}
                onChange={handleInputChange}
              />
            </InputGroup>
            <Form.Text className="text-danger">{passwordError}</Form.Text>
            <Button type="submit" className="bg-black border-0 p-2 my-3 w-100">
              Update Account
            </Button>
          </Form>
        </Card>
      </Container>
    </React.Fragment>
  );
}
