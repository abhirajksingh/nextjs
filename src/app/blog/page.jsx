import PostCard from "@/components/postCard/PostCard";
import style from "./blog.module.css";
// import { getPosts } from "@/lib/data";
import axios from "axios";

// fetch data with an api
const getPosts = async () => {
  const res = await axios.get("http://localhost:3000/api/blog");
  if (!res) {
    throw new Error("Something went wrong");
  }
  return res.data;
};

const BlogPage = async () => {
  const posts = await getPosts();
  // const posts = await getPosts();
  return (
    <div className={style.container}>
      {posts.map((post) => (
        <div className={style.postDiv} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
