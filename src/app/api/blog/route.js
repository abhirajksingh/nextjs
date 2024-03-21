import { Post } from "@/lib/models";
import { connectionDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectionDB();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
