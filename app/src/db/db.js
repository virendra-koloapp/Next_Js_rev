const username = "patelvirendra62";
const password = "dKfVfnCnd7S8znxa";
import mongoose from "mongoose";

mongoose.connect(
  `mongodb+srv://${username}:${password}@cluster0.p0grhua.mongodb.net/memes?retryWrites=true&w=majority&appName=Cluster0`
);
