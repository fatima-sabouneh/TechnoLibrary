import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { variables } from "../../Variables/Variables";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  const LogInUser = async () => {
    let response = await fetch(variables.API_URL + "Customer/CustomerLogin", {
        method: "Post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": variables.API_URL,
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    });
    let result = await response.json();
    if (response.status === 200) {
        localStorage.setItem("isAuth", true);
        localStorage.setItem("CostumerId", result["CustomerId"])
        toast.success("Logged in successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        window.location.href = "/";
    } else if (response.status === 401){
        toast.error("Incorrect Password", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    } else if (response.status === 403){
        toast.warn("Please reset your password", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    } else if (response.status === 405){
        toast.warn("Please check your email and confirm your password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    } 
    else if (response.status === 404){
        toast.error("User not found", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    }
    console.log(password)
}

  return (
    <div className="Login afterHeader">
      <div className="row">
        <Card className="cardlogin col d-flex justify-content-center">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <h1 className="logintitle">Login</h1>
              <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
                <div className="row">
                  <label>You don't have an account? <Link to="/SignUp" className="SignupLink">SignUp</Link></label>
                </div>
              <button className="LoginBtn" block size="lg" type="submit" disabled={!validateForm()} onClick={LogInUser}>
                Login
              </button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );


};

export default Login;
