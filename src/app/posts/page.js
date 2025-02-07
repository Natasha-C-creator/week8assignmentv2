import Navbar from "../components/navbar";
import Link from "next/link";
import pg from "pg";
import Form from "@/app/components/Form";

export default async function PostsPage({ searchParams }) {
  const query = await searchParams;
  console.log("searchParams", query);
  const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const sortColumn = query.sortBy || "date";
  const sortOrder = query.sort === "desc" ? "DESC" : "ASC";

  // const posts = (await db.query(`SELECT * FROM posts`)).rows;
  const posts = (
    await db.query(`
    SELECT * FROM posts
    ORDER BY ${sortColumn} ${sortOrder}
  `)
  ).rows;

  console.log(posts);

  if (query.sort === "desc") {
    posts.reverse();
  }

  return (
    <div>
      <h1>Slow Living Posts</h1>
      <Link href="/posts?sort=asc&sortBy=date">Sort by Date Ascending</Link> -
      <Link href="/posts?sort=desc&sortBy=date">Sort by Date Descending</Link> -
      <Link href="/posts?sort=asc&sortBy=title">Sort by Title Ascending</Link> -
      <Link href="/posts?sort=desc&sortBy=title">Sort by Title Descending</Link>
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
