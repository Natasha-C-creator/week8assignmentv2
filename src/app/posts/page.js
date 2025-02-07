//---------------------
//POSTS PAGE WITH CREATE POST BUTTON
//---------------------

import Navbar from "../components/navbar";
import Link from "next/link";
import pg from "pg";
import Form from "@/app/components/Form";

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
    <div>
      <h1>Slow Living Posts</h1>
      <Link href="/posts?sort=asc">Sort ascending</Link> -{" "}
      <Link href="/posts?sort=desc">Sort descending</Link>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <em>{post.title}</em>
              <p>{post.content}</p>
            </li>
          ))
        ) : (
          <li>No posts available</li>
        )}
      </ul>
      <Link href="/create-post">
        <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
          Create a Post
        </button>
      </Link>
    </div>
  );
}
