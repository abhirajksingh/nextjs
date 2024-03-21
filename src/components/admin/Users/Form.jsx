"use client";
import styles from "./users.module.css";
import { useFormState } from "react-dom";
import { addUser } from "@/lib/action";
const UsersForm = ({ userId }) => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <div>
      <p className={styles.heading}>Add New User</p>
      <form action={formAction} className={styles.form}>
        <input type="text" placeholder="Username" name="username" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input type="text" placeholder="Images Url" name="img" />
        <select name="isAdmin" id="isAdmin">
          <option value={false} defaultValue={false}>
            User
          </option>
          <option value={true}>Admin</option>
        </select>
        <button>Add User</button>
        {state && state.error}
      </form>
    </div>
  );
};

export default UsersForm;
