import { createMessage, deleteMessage } from "./actions";
import Message from "./lib/models/Message";
import { dbConnect } from "./lib/mongodb";

export default async function Home() {
  await dbConnect();
  const messages = await Message.find({}).lean();
  console.log(messages);
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center">Guestbook</h1>
      <h2>Leave a message</h2>
      <form action={createMessage}>
        <input
          name="author"
          className="px-2 mb-2 mx-1 border rounded"
          required
        />
        <input
          name="text"
          className="border px-2  mb-2 mx-1 rounded"
          maxLength={280}
          required
        />
        <button
          type="submit"
          className="py-0.5 px-3 mb-2 mx-1 bg-blue-400 rounded"
        >
          Post
        </button>
      </form>
      <div>
        {messages.length === 0 ? (
          <h1 className="text-gray-400 text-center">
            No message yet. Be the first.
          </h1>
        ) : (
          messages.map((item) => (
            <div className="bg-white border rounded p-4 mb-3" key={item._id}>
              <h2 className="text-xl font-bold">{item.author}</h2>
              <p>{item.text}</p>
              <small>{new Date(item.createdAt).toLocaleDateString()}</small>
              <form action={deleteMessage.bind(null, item._id.toString())}>
                <button
                  type="submit"
                  className="bg-red-500 rounded px-4 py-1 hover:bg-red-400 cursor-pointer text-white "
                >
                  Delete
                </button>
              </form>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
