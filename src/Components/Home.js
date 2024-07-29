import React, { useState } from "react";
import { Card, Container} from "react-bootstrap";
import Header from "./Header";

export default function Home() {
  let storedUserInfo = JSON.parse(localStorage.getItem("user_info")) || {};

  const [userInfo, setUserInfo] = useState(storedUserInfo);

  return (
    <React.Fragment>
      <Header />
      <Container className="d-flex flex-column justify-content-start mt-5 align-items-center min-vh-100">
        <h2 className="mb-4 mt-3">
          Welcome, <span className="text-success">{userInfo.name}</span>
        </h2>
        <Card
          style={{ width: "25rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
          className="mb-4 mt-5 border-0"
        >
          <Card.Body>
            <Card.Title
              className="text-center mb-4"
              style={{ fontWeight: "bold", fontSize: "1.5rem" }}
            >
              User Information
            </Card.Title>
            <Card.Text style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
              <strong>Username:</strong> {userInfo.name}
            </Card.Text>
            <Card.Text style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
              <strong>Email:</strong> {userInfo.email}
            </Card.Text>
            <Card.Text style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
              <strong>Contact:</strong> {userInfo.contact}
            </Card.Text>
            <Card.Text style={{ fontSize: "1.1rem" }}>
              <strong>Password:</strong> {userInfo.password}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
}
