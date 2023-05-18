import { useState } from "react";

import React from "react";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setTitle(e.target.value);

  return (
    <section>
      <h2>Add a new Post</h2>
      <form action="">
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
      </form>
    </section>
  );
};

export default AddPostForm;
