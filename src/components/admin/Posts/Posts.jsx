import Image from "next/image";
import styles from "./posts.module.css";
import { getPosts } from "@/lib/data";
import { deletePost } from "@/lib/action";

const AdminPost = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.postContainer}>
      <p className={styles.heading}>Posts</p>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.details}>
            <Image
              className={styles.img}
              src={post.img || "/noavatar.png"}
              alt=""
              width={40}
              height={40}
            />
            <span>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.deletePostButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPost;
