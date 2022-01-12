import './AddPost.css';
import { useHistory } from "react-router-dom";
import { createPost } from "../../services/posts";
import React, { useState } from "react";

function AddPost(props) {
  const { user } = props;
  const history = useHistory();
  const [form, setForm] = useState({
    content: "",
    user: user.id,
  });
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    createPost(form).then(() => history.push("/blog"))
  }
  const { content } = form;
  return (<div className="add-post">
    <h2>Write a post</h2>
    <p>Questions? Feedback? Suggestions? </p>

    <form onSubmit={onSubmit}>
        <label htmlFor="post-content">Content:</label>
          <textarea
            required
            id="post-content"
            type="text"
            name="content"
            value={content}
            placeholder="what are your thoughts?"
            onChange={handleChange}
            className="signin-input"
      />
       <button>Submit</button>
      </form>
  </div>)
}
 
export default AddPost;