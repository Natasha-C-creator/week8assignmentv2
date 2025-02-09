//---------------------
//THIS PAGE SHOULD SHOW INDIVIDUAL POSTS
//---------------------

import pg from "pg";

export async function generateMetadata({ params }) {
  const { id } = params;
  const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  });
}

export default async function PostPage({ params }) {
  const { id } = params;
  const slug = await params;
  console.log(slug);

  const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    const result = await db.query("SELECT * FROM posts WHERE id = $1", [id]);

    if (result.rows.length) {
      const post = result.rows[0];
      return (
        <div>
          <h1>
            {post.title} Post Page {slug.id}
          </h1>
          <p>{post.content}</p>
          <p>{post.date}</p>
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
