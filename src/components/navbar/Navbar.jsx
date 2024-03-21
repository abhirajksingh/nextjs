import Link from "next/link";
import Links from "./links/Links";
import style from "./navbar.module.css";
import { auth } from "@/lib/auth";
const Navber = async () => {
  const session = await auth();
  return (
    <div className={style.container}>
      <Link href={"/"} className={style.logo}>
        LOGO
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navber;
