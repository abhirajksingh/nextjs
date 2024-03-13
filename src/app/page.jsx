import styles from "./home.module.css";
import Image from "next/image";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi
          eum sint totam dolore animi nam dolorem debitis atque obcaecati
          repudiandae.
        </p>
        <div className={styles.buttons}>
          <button>Learn More</button>
          <button>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brands"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imagesContainer}>
        <Image src="/hero.gif" alt="hero_image" fill />
      </div>
    </div>
  );
};

export default Home;
