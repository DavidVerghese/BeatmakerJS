import './SignIn.css';
import { signIn } from "../../services/users";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import BlogHeader from '../../components/BlogHeader/BlogHeader';
function SignIn(props) {

  
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = (event) => {
    event.preventDefault();

    const { setUser } = props;

    signIn(form)
      .then((user) => {
        setUser(user);
      })
      .then(() => history.push("/blog"))
      .catch((error) => {
        console.error(error);
        setForm({
          isError: true,
          errorMsg: "Invalid Credentials",
          username: "",
          password: "",
        });
      });
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "success";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button id="signin-button" type="submit">
          Sign In
        </button>
      );
    }
  };

  const { username, password, user } = form;

  return (<div className="signin">
       <BlogHeader user={user}/>
    <div className="form-container">
        <h1>Sign In</h1>
        <p><i><Link to="sign-up">Sign up</Link> if you do not have an account</i></p>
        <form onSubmit={onSignIn}>
        <label htmlFor="signin-username">Username</label>
          <input
            required
            id="signin-username"
            type="text"
            name="username"
            value={username}
            placeholder="Enter Username"
            onChange={handleChange}
            className="signin-input"
          />
            <label htmlFor="signin-password">Password</label>
          <input
            required
            name="password"
            id="signin-password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="signin-input"
          />
          {renderError()}
        </form>
    </div>

  </div>)
}
export default SignIn