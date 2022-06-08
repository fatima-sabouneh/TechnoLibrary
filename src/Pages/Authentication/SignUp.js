import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { variables } from "../../Variables/Variables";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");
    const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
  }
  const RegisterUser = async () => {
    let response = await fetch(variables.API_URL + "Customer/AddCustomerWithWishlist", {
    method: "Post",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": variables.API_URL,
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      birthday: birthday
    }),
    });
    let result = await response.json();
    if (response.ok) {
        sessionStorage.setItem("isAuth", true)
        toast.success("Registered Succesfully, now please login", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate("/")

    } else {
        toast.error(result, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    }  
}

  return (
    <div className="signup afterHeader">
      <div className="row">
      <Card className="cardsignup col d-flex justify-content-center">
        <Card.Body>
      <Form onSubmit={handleSubmit}>
        <h1 className="logintitle">SignUp</h1>
        <Form.Group size="lg" controlId="fname">
        <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="lname">
        <Form.Label>Last Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
        <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="birthday">
        <Form.Label>Birthday</Form.Label>
          <Form.Control
            autoFocus
            type="date"
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
        <div className="row">
          <label>Already have an account? <Link to="/Login" className="SignupLink">Login</Link></label>
        </div>
        <button className="LoginBtn" block size="lg" type="button" onClick={RegisterUser}>
          SignUp
        </button>
      </Form>
      </Card.Body>
      </Card>
    </div>
    </div>
        );
    

};

export default SignUp;
