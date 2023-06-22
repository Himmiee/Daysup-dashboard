import mongoose from "mongoose";

type postType = {
  regNumber: string;
  faculty: string;
  passStatus: boolean;
  timeTable: File;
  createdAt: string;
};

export const postSchema = new mongoose.Schema<postType>({
  regNumber: { type: String, required: true },
  faculty: { type: String, required: true },
  passStatus: { type: Boolean, required: false, default: false },
  timeTable: { type: File, required: false },
  createdAt: { type: String, default: Date.now().toString() },
});

export const PostModel = mongoose.model("PostSchema", postSchema);

export const createPost = (values: Record<string, any>) => {
  new PostModel(values).save().then((post) => post.toObject());
};
export const updatePostById = (
  regNumber: string,
  values: Record<string, any>
) => {
  PostModel.findByIdAndUpdate({ regNumber, values });
};
