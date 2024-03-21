import style from "./register.module.css";
import RegisterForm from "@/components/auth/register/RegisterForm";

const RegisterPage = () => {
  return (
    <div className={style.container}>
      <div className={style.wrappper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
