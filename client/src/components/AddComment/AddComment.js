import './AddComment.css';
import { createComment } from "../../services/comments";
import React, { useState } from "react";

function AddComment(props) {
  const { user_id, post_id } = props;
  const [form, setForm] = useState({
    content: "",
    user: user_id,
    post: post_id
  });
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  
  const onSubmit = (event) => {
    createComment(form)
  }
  const { content } = form;
  return (<div className="add-comment">
    
    <form onSubmit={onSubmit}>
        <label htmlFor="comment-content">Add a comment</label>
          <textarea
            required
            id="comment-content"
            type="text"
            name="content"
            value={content}
            placeholder="Add a reply"
            onChange={handleChange}
            className="signin-input"
      />
       <button>Submit</button>
    </form>
</div>)
}
export default AddComment;