import { model, models, Schema } from "mongoose";

export interface ICategory extends Document {
  _id: string;
  name: string;
}

const Category = new Schema({
  name: { type: String, unique: true, required: true },
});

const CategorySchema = models.Category || model("Category", Category);

export default CategorySchema;
