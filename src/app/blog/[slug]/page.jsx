import Image from "next/image";
import style from "./SinglePostPage.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
// import { getPost } from "@/lib/data";

// fetch data with an api
const getPost = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!res) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return (
    <div className={style.container}>
      {post.img && (
        <div className={style.imgContainer}>
          <Image className={style.img} src={post.img} alt="Image" fill />
        </div>
      )}
      <div className={style.textContainer}>
        <h1 className={style.title}>{post.title}</h1>
        <div className={style.details}>
          <Image
            className={style.avatar}
            src="https://images.pexels.com/photos/19404757/pexels-photo-19404757/free-photo-of-person-hiking-in-winter-mountains.jpeg"
            alt="Image"
            height={50}
            width={50}
          />
          <Suspense fallback={<div>Loading....</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={style.detailsText}>
            <span className={style.authorTitle}>Published</span>
            <span className={style.author}>
              {new Date(post.createdAt).toLocaleDateString("en-IN", options)}
            </span>
          </div>
        </div>
        <div className={style.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
