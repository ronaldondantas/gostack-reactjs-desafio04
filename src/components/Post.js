import React from "react";

function PostHeader({ post }) {
  return (
    <div className="post-header" key={post.id}>
      <img className="avatar" src={post.author.avatar} />
      <div className="details">
        <span>{post.author.name} </span>
        <span>{post.date}</span>
      </div>
    </div>
  );
}

function PostComment({ post }) {
  {
    return post.comments.map(comment => (
      <div className="post-comments" key={comment.id}>
        <div className="divider" />
        <div className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      </div>
    ));
  }
}

function Post({ post }) {
  return (
    <div className="post">
      <PostHeader post={post} />
      <p className="post-content">{post.content}</p>
      <PostComment post={post} />
    </div>
  );
}

export default Post;
