import Image from "next/image";
import style from "./postCard.module.css";
import Link from "next/link";
const PostCard = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/19404757/pexels-photo-19404757/free-photo-of-person-hiking-in-winter-mountains.jpeg"
            alt=""
            fill
            className={style.img}
          />
        </div>
        <span className={style.date}>01.01.2024</span>
      </div>
      <div className={style.buttom}>
        <h1 className={style.title}>Title</h1>
        <p className={style.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          numquam nisi debitis sapiente error distinctio quasi recusandae
          explicabo. Tempora qui a quasi molestiae praesentium asperiores
          veritatis eos necessitatibus deserunt odit.
        </p>
        <Link className={style.link} href="/blog/post">
          REAM MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
