"use server";

import { Meme } from "@/db";
import fs from "fs";
import { redirect } from "next/navigation";
import { v4 as uuid } from "uuid";

export async function shareMemeAction(prev, _formData) {
  const formData = Object.fromEntries(_formData);

  const name = formData.name;
  const description = formData.description;
  const email = formData.email;
  const image = formData.image;

  const filePath = `/images/meme-${uuid()}.${image.name.split(".").pop()}`;

  console.log(image);

  try {
    if (!name) {
      throw new Error("Invalid input");
    }

    if (!image.size) {
      throw new Error("No File");
    }

    const stream = fs.createWriteStream(`public${filePath}`);

    stream.on("error", (error) => {
      console.log(error);
      console.log("can not write");
    });

    stream.write(Buffer.from(await image.arrayBuffer()));

    Meme.create({
      name,
      description,
      image: filePath,
      email,
      tags: [],
    }).then(console.log);
  } catch (error) {
    return {
      error: error.message || "something went wrong!",
    };
  }

  redirect("/memes");
}
