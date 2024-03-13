import Image from "next/image";
import style from "./about.module.css";
const AboutPage = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h2 className={style.subTitle}>About Agency</h2>
        <h1 className={style.title}>
          I create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={style.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          tempora blanditiis consequatur asperiores! Provident iure unde optio
          dignissimos vero sed eveniet maxime itaque iusto, debitis labore
          praesentium dolor eum alias.
        </p>
        <div className={style.boxes}>
          <div className={style.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={style.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={style.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={style.imageContainer}>
        <Image
          src="/about.png"
          alt="About_Image"
          fill
          className={style.image}
        />
      </div>
    </div>
  );
};

export default AboutPage;
