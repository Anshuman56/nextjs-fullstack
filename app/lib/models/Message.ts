import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  author: { type: String, require: true },
  text: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Message ||
  mongoose.model("Message", messageSchema);
