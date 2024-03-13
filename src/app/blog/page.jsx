import PostCard from "@/components/postCard/PostCard";
import style from "./blog.module.css";
const BlogPage = () => {
  return (
    <div className={style.container}>
      <div className={style.post}>
        <PostCard />
      </div>
      <div className={style.post}>
        <PostCard />
      </div>
      <div className={style.post}>
        <PostCard />
      </div>
      <div className={style.post}>
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
