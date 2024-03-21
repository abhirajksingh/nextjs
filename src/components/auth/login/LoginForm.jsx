"use client";
import style from "./login.module.css";
import { useFormState } from "react-dom";
import { login } from "@/lib/action";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <form action={formAction} className={style.form}>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button>Login</button>
      {state?.error}
    </form>
  );
};

export default LoginForm;
