import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmojis = {
  thumbUp: "👍🏻",
  wow: "😮",
  laugh: "🤣",
  puke: "🤮",
  hearts: "🖤",
};

const ReactionBtns = ({ post }) => {
  const dispatch = useDispatch();
  const reactionBtns = Object.entries(reactionEmojis).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} &nbsp; {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionBtns}</div>;
};

export default ReactionBtns;
