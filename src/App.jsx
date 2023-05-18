/* eslint-disable no-unused-vars */
import { useState } from "react";

import "./App.css";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <main>
      {/* <Counter /> */}
      <PostsList />
    </main>
  );
}

export default App;
