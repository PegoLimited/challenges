import { Favorite, FavoriteType } from "../model/favoriteModel";
import * as Mongoose from "mongoose";

export class HackernewsDB {
  database: Mongoose.Connection;
  favorites: Mongoose.Model<FavoriteType, {}, {}, {}, any>;

  constructor() {
    this.database = Mongoose.connection;
    this.favorites = Favorite;
  }

  async connect() {
    const uri = "mongodb://mongodb_container:27017";

    if (this.database) {
      return;
    }

    await Mongoose.connect(uri, {
      dbName: "hackernews",
      user: "root",
      pass: "rootpassword",
    });
  }

  disconnect() {
    if (!this.database) {
      return;
    }

    Mongoose.disconnect();
  }
}
