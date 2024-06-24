import mongoose from "mongoose";

const MemeSchema = mongoose.Schema({
  name: String,
  email: String,
  description: String,
  tags: [String],
  image: String,
});

const Meme = mongoose.models.meme || mongoose.model("meme", MemeSchema);

export { Meme };
