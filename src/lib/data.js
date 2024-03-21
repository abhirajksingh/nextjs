import { User, Post } from "./models";
import { connectionDB } from "./utils";

export const getPosts = async () => {
  try {
    connectionDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getPost = async (slug) => {
  try {
    connectionDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getUser = async (userId) => {
  try {
    connectionDB();
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
export const getUsers = async () => {
  try {
    connectionDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
