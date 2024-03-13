import Image from "next/image";
import style from "./SinglePostPage.module.css";
const SinglePostPage = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image
          className={style.img}
          src="https://images.pexels.com/photos/19404757/pexels-photo-19404757/free-photo-of-person-hiking-in-winter-mountains.jpeg"
          alt="Image"
          fill
        />
      </div>
      <div className={style.textContainer}>
        <h1 className={style.title}>Title</h1>
        <div className={style.details}>
          <Image
            className={style.avatar}
            src="https://images.pexels.com/photos/19404757/pexels-photo-19404757/free-photo-of-person-hiking-in-winter-mountains.jpeg"
            alt="Image"
            height={50}
            width={50}
          />
          <div className={style.detailsText}>
            <span className={style.authorTitle}>Author</span>
            <span className={style.author}>Terry jeffwfnwr</span>
          </div>
          <div className={style.detailsText}>
            <span className={style.authorTitle}>Published</span>
            <span className={style.author}>01.01.2024</span>
          </div>
        </div>
        <div className={style.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, quos
          maiores, tenetur voluptate esse debitis, minus explicabo
          exercitationem doloribus asperiores voluptas? Soluta maxime veritatis
          recusandae quasi autem quos ea delectus.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
