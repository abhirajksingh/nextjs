"use client";
import style from "./register.module.css";
import { useFormState } from "react-dom";
import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form action={formAction} className={style.form}>
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input
        type="password"
        placeholder="Conform Password"
        name="confpassword"
      />
      <button>Register</button>
      <span> {state?.error}</span>
      <Link href={"/login"}>
        Have an Account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
