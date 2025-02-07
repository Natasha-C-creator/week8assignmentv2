import Navbar from "../components/navbar";
import postData from "/lib/seed.js";

//This page will be where the posts are stored
// PG POOL?

// export default function Posts() {
//   return (
//     <>
//     <h1>POSTS</h1>

//     <h2>posts are listed here</h2>
//     </>
//   );
// }

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // call the API
  const posts = await response.json(); // parse the response as JSON

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
