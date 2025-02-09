import pg from "pg";

export default function CommentsForm() {
  async function handleSaveComment(commentData) {
    "use server";
    console.log("Saving comment to the database...");

    const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });
    const comment = commentData.get("comment");

    await db.query(`INSERT INTO comments (comment) VALUES ($1)`, [comment]);
    console.log("Comment saved!");
  }

  return (
    <form action={handleSaveComment}>
      <label htmlFor="comment">Add Comment</label>
      <input id="comment" name="comment" type="text" />
      <button type="submit">Save</button>
    </form>
  );
}
