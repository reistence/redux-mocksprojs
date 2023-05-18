/* eslint-disable no-unused-vars */
import { useState } from "react";

import "./App.css";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import rdx from "../public/redux.png";

function App() {
  return (
    <main>
      {/* <Counter /> */}
      <div className="header">
        <img src={rdx} alt="" />
        <AddPostForm />
      </div>
      <PostsList />
    </main>
  );
}

export default App;
