import { Meme } from "@/db";

export async function getMemes() {
  console.log("Fetching the memes....");
  return Meme.find();
}

export async function getMemeById(id) {
  console.log("Fetching the meme By id....");
  return Meme.findById(id);
}
