import { model, Schema } from "mongoose";

export interface FavoriteType {
  email: string;
  favorites: Array<string>;
}

// 2. Create a Schema corresponding to the document interface.
const favoriteSchema = new Schema<FavoriteType>({
  email: { type: String, required: true },
  favorites: Array<string>,
});

// 3. Create a Model.
export const Favorite = model<FavoriteType>("Favorite", favoriteSchema);
