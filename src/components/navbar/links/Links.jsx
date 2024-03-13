"use client";
import { useState } from "react";
import style from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  // temp
  const session = true;
  const isAdmin = true;
  return (
    <div className={style.container}>
      <div className={style.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={style.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        className={style.menuButton}
        onClick={() => setOpen((prev) => !prev)}
        src="/menu.png"
        alt="menu_button"
        width={30}
        height={30}
      />
      {open && (
        <div className={style.mobilelinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
