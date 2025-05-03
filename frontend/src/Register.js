import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Container } from "@mui/material";


function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:5000/register", form)
      .then(res => alert("Registered successfully"))
      .catch(err => console.error(err));
  };

  return (
    <Container maxWidth="sm">
      <h2>REGISTER</h2>
      <TextField fullWidth label="Full Name" name="fullName" onChange={handleChange} margin="normal" />
      <TextField fullWidth label="Email" name="email" onChange={handleChange} margin="normal" />
      <TextField fullWidth label="Mobile Number" name="mobile" onChange={handleChange} margin="normal" />
      <TextField fullWidth label="Date of Birth" name="dob" type="date" onChange={handleChange} margin="normal" InputLabelProps={{ shrink: true }} />
      <Button variant="contained" onClick={handleSubmit} style={{ marginTop: 20 }}>Submit</Button>
    </Container>
  );
}

export default Register;
