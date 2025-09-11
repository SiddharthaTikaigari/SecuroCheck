import React from "react";
import "./PostFeed.css";

function PostFeed() {
  const posts = [
    { id: 1, user: "Alice", content: "Got my certificate verified!" },
    { id: 2, user: "Bob", content: "SecuroCheck saved me from fraud!" },
  ];

  return (
    <main className="post-feed">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h4>{post.user}</h4>
          <p>{post.content}</p>
          <div className="post-actions">
            <button>👏 Appreciate</button>
            <button>💬 Comment</button>
            <button>🔗 Share</button>
          </div>
        </div>
      ))}
    </main>
  );
}

export default PostFeed;
