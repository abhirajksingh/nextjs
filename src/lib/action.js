"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectionDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (prevState, formData) => {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);

  try {
    connectionDB();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });
    await newPost.save();
    console.log("Saved to DB");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something Went Wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectionDB();
    await Post.findByIdAndDelete(id);
    revalidatePath("/admin");
  } catch (error) {
    return { error: "Something Went Wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectionDB();
    const user = await User.findOne({ username });
    console.log(user);
    if (user) {
      return { error: "Username Already Exists" };
    }
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      img,
      password: hashedPassword,
    });
    await newUser.save();
    console.log("Saved to DB");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something Went Wrong!" };
  }
};
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectionDB();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    revalidatePath("/admin");
  } catch (error) {
    return { error: "Something Went Wrong!" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};
export const handleLogout = async () => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, confpassword } =
    Object.fromEntries(formData);
  if (password !== confpassword) {
    return { error: "Password do not match" };
  }
  try {
    connectionDB();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "Username Already Exists" };
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return { success: true };
  } catch (error) {
    return { error: "Wrong Credentials" };
  }
};
export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw error;
  }
};
