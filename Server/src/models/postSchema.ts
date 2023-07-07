import mongoose from "mongoose";

type postType = {
  regNumber: string;
  faculty: string;
  passStatus: boolean;
  file: string;
  createdAt: string;
  updatedAt: string;
};

export const postSchema = new mongoose.Schema<postType>({
  regNumber: { type: String, required: true },
  faculty: { type: String, required: true },
  passStatus: { type: Boolean, required: false, default: false },
  file: { type: String, required: false },
  createdAt: { type: String, default: Date.now.toString()},
  updatedAt: { type: String, default: Date.now.toString()},
});

postSchema.pre('save', function(next){
  const now = new Date().toISOString();
  this.updatedAt = now;
  if(!this.createdAt) {
      this.createdAt = now
  }
  next();
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
