import { createMessage } from "./actions";

export default function Home() {
  return (
    <form action={createMessage}>
      <input name="author" required />
      <input name="text" required />
      <button type="submit">Post</button>
    </form>
  );
}
