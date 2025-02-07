import Navbar from "../components/navbar";
import Link from "next/link";

export default function PostsPage() {
  return (
    <div>
      <h1>Posts</h1>
      <Link href="/posts/1">Post 1</Link>
      <Link href="/posts/2">Post 2</Link>
      <Link href="/posts/3">Post 3</Link>
    </div>
  );
}

// export default async function PostsPage() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // call the API
//   const posts = await response.json(); // parse the response as JSON

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
