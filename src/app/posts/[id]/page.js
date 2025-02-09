//---------------------
//THIS PAGE SHOULD SHOW INDIVIDUAL POSTS
//---------------------

import pg from "pg";
import CommentsForm from "@/app/components/CommentsForm";
import { Comme } from "next/font/google";

export async function generateMetadata({ params }) {
  const { id } = params;
  const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const result = await db.query("SELECT title FROM posts WHERE id = $1", [id]);
  if (result.rows.length) {
    return {
      title: result.rows[0].title,
    };
  }

  return { title: "Post Not Found" };
}

export default async function PostPage({ params }) {
  const { id } = params;
  const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    const postResult = await db.query("SELECT * FROM posts WHERE id = $1", [
      id,
    ]);

    if (postResult.rows.length) {
      const post = postResult.rows[0];

      const commentsResult = await db.query(
        "SELECT * FROM comments WHERE post_id = $1",
        [id]
      );

      const comments = commentsResult.rows;

      return (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <p>{post.date}</p>
          <CommentsForm postId={post.id} />

          <div>
            <h2>Comments</h2>
            {comments.length > 0 ? (
              <ul>
                {comments.map((comment) => (
                  <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <small>{comment.created_at}</small>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No comments yet</p>
            )}
          </div>
        </div>
      );
    } else {
      return <h1>Post Not Found</h1>;
    }
  } catch (error) {
    console.error(error);
    return <h1>Error loading post</h1>;
  }
}
