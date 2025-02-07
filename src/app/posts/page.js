import Navbar from "../components/navbar";
import Link from "next/link";
import pg from "pg";
import Form from "@/app/components/Form";

export default async function PostsPage() {
  const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const posts = (await db.query(`SELECT * FROM posts`)).rows;

  console.log(posts);

  return (
    <div>
      <h1>Slow Living Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.date}</strong> - <em>{post.title}</em>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
}
