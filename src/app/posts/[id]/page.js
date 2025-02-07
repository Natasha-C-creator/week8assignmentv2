import pg from "pg";

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
          <li key={post.id}>{post.date}{post.title}{post.content}</li>
        ))}
      </ul>
    </div>
  );
}



// export default async function PostPage({ params }) {
//   const slug = await params;
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug.id}` // include the params.id value from the URL
//   );
//   const post = await response.json(); // parse the response as JSON

//   return (
//     <div>
//       <h1>Post {post.id}</h1>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//     </div>
//   );
// }
