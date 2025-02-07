import pg from "pg";
import Form from "@/app/components/Form";
// import postStyles from "src/app/posts.module.css";

export default async function PostsPage() {
  const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const posts = (await db.query(`SELECT * FROM posts`)).rows;

  console.log(posts);

  return (
    // <div className="container">
    <div>
      <h1>Slow Living Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            {post.content}
            {post.date}
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
}
