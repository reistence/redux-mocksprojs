import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionBtns from "./ReactionBtns";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postError = useSelector(getPostsError);

  // Clean useEffect fatching twice
  const shouldFecth = useRef(true);
  useEffect(() => {
    const abortController = new AbortController();
    if (postsStatus === "idle") {
      if (shouldFecth.current) {
        dispatch(fetchPosts());
        shouldFecth.current = false;
      }
    }

    return () => {
      abortController.abort();
    };
  }, [postsStatus, dispatch]);

  //   const orderedPosts = posts
  //     .slice()
  //     .sort((a, b) => b.date.localeCompare(a.date));

  //   const renderedPosts = orderedPosts.map((post) => (

  //   ));

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading..</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    // console.log(orderedPosts);

    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "error") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2 style={{ alignSelf: "center" }}>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
