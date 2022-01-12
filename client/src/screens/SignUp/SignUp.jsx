import { signUp, signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import './SignUp.css';

function SignUp(props) {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }


  const onSignUp = (event) => {
    event.preventDefault();
    const { setUser } = props;
    
    signUp(form)
      .then(() => signIn(form))
      .then((user) => setUser(user))
      .then(() => history.push("/blog"))
      .catch((error) => {
        console.error(error);
        setForm({
          email: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      });
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button id="signup-button" type="submit">
          Sign Up
        </button>
      );
    }
  };

  const { email, username, password, passwordConfirmation, user } = form;

  return ( <div className="signup-background">
         <Header user={user}/>
  <div className="signup-container">
    <h1>Sign Up</h1>
    <form className="signup-form" onSubmit={onSignUp}>
    <label htmlFor="signup-username">Username</label>
        <input
        required
        type="text"
          name="username"
        value={username}
        placeholder="Enter username"
        onChange={handleChange}
        id="signup-username"
        />
         <label htmlFor="signup-email">Email</label>
      <input
        required
        type="email"
        name="email"
        value={email}
        placeholder="Enter email"
        onChange={handleChange}
        id="signup-email"
        />
         <label htmlFor="signup-password">Password</label>
      <input
        required
        name="password"
        value={password}
        type="password"
        placeholder="Password"
        onChange={handleChange}
        id="signup-password"
        />
         <label htmlFor="signup-password-confirmation">Password confirmation</label>
      <input
        required
        name="passwordConfirmation"
        value={passwordConfirmation}
        type="password"
        placeholder="Confirm Password"
        onChange={handleChange}
        id="signup-password-confirmation"
      />
      {renderError()}
    </form>
  </div>
  </div>)
}
export default SignUp