import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
    selectedCountry: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // If the input is a checkbox, handle its checked state separately
    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: checked,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here, e.g., send the form data to the server
    console.log(formData);
  };

  return (
    <div>
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name&nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div><br/>
        <div>
          <label htmlFor="lastName">Last Name&nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div><br/>
        <div>
          <label htmlFor="email">Email&nbsp;&nbsp;&nbsp;</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div><br/>
        <div>
          <label htmlFor="password">Password&nbsp;&nbsp;&nbsp;</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div><br/>
        <div>
          <label htmlFor="confirmPassword">Confirm Password&nbsp;&nbsp;&nbsp;</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div><br/>
        <div>
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            Remember Me
          </label>
        </div><br/>
        <div>
          <label htmlFor="selectedCountry">Select Country&nbsp;&nbsp;&nbsp;</label>
          <select
            id="selectedCountry"
            name="selectedCountry"
            value={formData.selectedCountry}
            onChange={handleChange}
          >
            <option value="">Select a country</option>
            <option value="uganda">UGANDA</option>
            <option value="uk">UK</option>
            <option value="india">India</option>
          </select>
        </div><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
