//---------------------
//POSTS PAGE WITH CREATE POST BUTTON
//---------------------

import Navbar from "../components/navbar";
import Link from "next/link";
import pg from "pg";
import Form from "@/app/components/Form";

export const metadata = {
  title: "Posts",
  description: "A simple blog built with Next.js",
};

export default async function PostsPage({ searchParams }) {
  const query = searchParams || {};
  console.log("searchParams", query);
  const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  });

  let posts = [];
  try {
    const res = await db.query("SELECT * FROM posts");
    posts = res.rows;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  if (query.sort === "desc") {
    posts.reverse();
  }

  console.log(posts);

  return (
    <div className="posts-container">
      <h1 className="posts-title">Slow Living Posts</h1>
      <Link href="/posts?sort=asc" className="sort-links">
        Sort ascending
      </Link>{" "}
      -{" "}
      <Link href="/posts?sort=desc" className="sort-links">
        Sort descending
      </Link>
      <ul className="posts-list">
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <em>{post.title}</em>
              </Link>
              <p>{post.content}</p>
            </li>
          ))
        ) : (
          <li>No posts available</li>
        )}
      </ul>
      <Link href="/create-post">
        <button className="button">Create a Post</button>
      </Link>
    </div>
  );
}
