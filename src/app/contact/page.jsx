import Image from "next/image";
import style from "./contact.module.css";
const ContactPage = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image
          src="/contact.png"
          alt="Contact Image"
          className={style.img}
          fill
        />
      </div>
      <div className={style.formContainer}>
        <form className={style.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className={style.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
