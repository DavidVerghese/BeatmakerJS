import { signUp, signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import AuthenticationHeader from "../../components/AuthenticationHeader/AuthenticationHeader"

import './SignUp.css';


function SignUp(props) {
  const history = useHistory();
  const { siteUser } = props;
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    profile_pic: "",
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
    if (password !== passwordConfirmation)
    { setForm({ ...form, isError: true, errorMsg: "passwords need to match" }) }
    else {
      const smallerForm = {username:username,email:email,password:password,profile_pic:profile_pic}
      signUp(smallerForm)
      .then(() => signIn(form))
      .then((user) => setUser(user))
      .then(() => history.push("/blog"))
        .catch((error) => {
          console.log(error);
        setForm({
          email: "",
          password: "",
          passwordConfirmation: "",
          profile_pic:"",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      });
    }

    
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

  const { email, username, password, passwordConfirmation, user, profile_pic } = form;

  return ( <div className="signup-background">
         <AuthenticationHeader user={siteUser}/>
  <div className="signup-container">
    <h1>Sign Up</h1>
    <form className="signup-form" onSubmit={onSignUp}>
        <label htmlFor="signup-username">Username: <em>cannot be a username currently in use</em></label>
        <input
        required
        type="text"
          name="username"
        value={username}
        placeholder="Enter username"
        onChange={handleChange}
        id="signup-username"
        />
        <label htmlFor="signup-email">Email: <em>cannot be an email address currently in use</em></label>
      <input
        required
        type="email"
        name="email"
        value={email}
        placeholder="Enter email"
        onChange={handleChange}
        id="signup-email"
        />
        <label htmlFor="signup-profile-pic">Profile Picture URL: <em>Optional</em></label>
        <input
          required
        name="profile_pic"
        value={profile_pic}
        type="profile_pic"
        placeholder="Enter profile picture url"
        onChange={handleChange}
        id="signup-profile-pic"
      />
        <label htmlFor="signup-password">Password: <em>Must be at least 6 characters long</em></label>
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