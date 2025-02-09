import pg from "pg";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function CommentsForm({ postId }) {
  return (
    <form action={`/posts/${postId}`} method="POST">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="comment"
          htmlFor="comment"
        >
          Comment
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="comment"
          type="text"
          placeholder="Comment"
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
