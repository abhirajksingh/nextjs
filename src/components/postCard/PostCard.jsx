import Image from "next/image";
import style from "./postCard.module.css";
import Link from "next/link";
const PostCard = ({ post }) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  return (
    <div className={style.container}>
      <div className={style.top}>
        {post.img && (
          <div className={style.imgContainer}>
            <Image src={post.img} alt="" fill className={style.img} />
          </div>
        )}
        <span className={style.date}>
          {new Date(post.createdAt).toLocaleDateString("en-IN", options)}
        </span>
      </div>
      <div className={style.buttom}>
        <h1 className={style.title}>{post.title}</h1>
        <p className={style.desc}>{post.body}</p>
        <Link className={style.link} href={`/blog/${post.slug}`}>
          REAM MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
