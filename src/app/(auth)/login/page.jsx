import { handleGithubLogin } from "@/lib/action";
import style from "./login.module.css";
import LoginForm from "@/components/auth/login/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className={style.container}>
      <div className={style.wrappper}>
        <LoginForm />
        <form action={handleGithubLogin}>
          <button className={style.githubBtn}>Github</button>
        </form>
        <Link href={"/register"}>
          {"Don't have an Account?"} <b>Register</b>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
