import './AddPost.css';
import { createPost } from "../../services/posts";
import React, { useState } from "react";

function AddPost(props) {
  const { user } = props;
  const [form, setForm] = useState({
    content: "",
    user: user.id,
  });
  const handleChange = (event) => {
    setForm({
      ...form,
      user: user.id,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = () => {
    createPost(form)
  }
  const { content } = form;

  return (<div className="add-post">
    <form onSubmit={onSubmit}>
        <label htmlFor="post-content">Content:</label>
          <textarea
            required
            id="post-content"
            type="text"
            name="content"
            value={content}
            placeholder="Write a comment"
            onChange={handleChange}
            className="signin-input"
      />
       <button>Submit</button>
      </form>
  </div>)
}
 
export default AddPost;