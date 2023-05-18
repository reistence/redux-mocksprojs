/* eslint-disable no-unused-vars */
import { useState } from "react";

import "./App.css";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <main>
      {/* <Counter /> */}
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
