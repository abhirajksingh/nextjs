import Link from "next/link";
import Links from "./links/Links";
import style from "./navbar.module.css";
const Navber = () => {
  return (
    <div className={style.container}>
      <Link href={"/"} className={style.logo}>
        LOGO
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navber;
