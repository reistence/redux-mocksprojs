import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));

      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="add">
      <h2>Add a new Post</h2>
      <form>
        <div>
          <label htmlFor="postAuthor">Author:</label>
          <select
            name="postAuthor"
            id="postAuthor"
            value={userId}
            onChange={onAuthorChanged}
          >
            <option value=""> </option>
            {usersOptions}
          </select>
        </div>
        <div>
          <label htmlFor="postTitle">Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
        </div>
        <div>
          <label htmlFor="postContent">Content:</label>
          <textarea
            type="text"
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
        </div>
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
