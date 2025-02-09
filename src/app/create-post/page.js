//CREATE A POST PAGE

import pg from "pg";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function NewPostPage() {
  async function handleSavePost(formData) {
    "use server";
    console.log("Saving post to the database...");
    const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

    const title = formData.get("title");
    const content = formData.get("content");

    await db.query(`INSERT INTO posts (title, content) VALUES ($1, $2)`, [
      title,
      content,
    ]);
    console.log("Post saved!");

    revalidatePath("/posts");
    redirect("/posts");
  }

  return (
    <form action={handleSavePost}>
      <h1>Create your own article for the Slow Living page</h1>
      <label htmlFor="title" required>
        Title
      </label>
      <input id="title" name="title" type="text" />
      <label htmlFor="content" required>
        Content
      </label>
      <textarea id="content" name="content" />
      <button className="button" type="submit" required>
        Submit
      </button>
    </form>
  );
}
