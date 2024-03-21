import { Post } from "@/lib/models";
import { connectionDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;
  console.log(slug);

  try {
    connectionDB();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const DELETE = async (req, { params }) => {
  const { slug } = params;
  console.log(slug);
  try {
    connectionDB();
    await Post.deleteOne({ slug });
    return NextResponse.json("Post Deleted");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
