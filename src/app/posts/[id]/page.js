//---------------------
//THIS PAGE SHOULD SHOW INDIVIDUAL POSTS
// //---------------------

// import pg from "pg";
// import Form from "@/app/components/Form";
// import styles from "@/app/posts.module.css";
// import { redirect } from "next/navigation";

// export default async function PostsPage() {
//   const db = new pg.Pool({
//     connectionString: process.env.DATABASE_URL,
//   });

//   const posts = (await db.query(`SELECT * FROM posts`)).rows;

//   console.log(posts);

//   return (
//     // <div className="container">
//     <div>
//       <h1>HURRAH</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             {post.title}
//             {post.content}
//             {post.date}
//           </li>
//         ))}
//       </ul>
//       <Form />
//     </div>
//   );
// }
