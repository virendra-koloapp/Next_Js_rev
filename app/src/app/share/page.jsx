import { FileInput } from "@/components/inputs/file-input";

import React from "react";
import { shareMemeAction } from "@/actions/meme";

export default function ShareMemePage() {
  return (
    <div>
      <h1>Share a meme with the community</h1>

      <form action={shareMemeAction}>
        <div className="form-field">
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="" />
        </div>

        <div className="form-field">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" />
        </div>

        <div className="form-field">
          <label htmlFor="">description</label>
          <textarea name="description" id="" cols="30" rows="10"></textarea>
        </div>

        <FileInput name="image" label="Choose image" />

        <div className="form-field">
          <input type="submit" name="" id="" />
        </div>
      </form>
    </div>
  );
}
