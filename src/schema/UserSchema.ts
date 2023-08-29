import mongoose from "mongoose";

export interface IUser {
  first_name: string;
  last_name: string;
  password_key: string;
  email?: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  password_key: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", UserSchema);
