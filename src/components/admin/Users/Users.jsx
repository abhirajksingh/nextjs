import { getUsers } from "@/lib/data";
import styles from "./users.module.css";
import { deleteUser } from "@/lib/action";
import Image from "next/image";

const AdminUser = async () => {
  const users = await getUsers();

  return (
    <div className={styles.userContainer}>
      <p className={styles.heading}>Users</p>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.details}>
            <Image
              className={styles.img}
              src={user.img || "/noavatar.png"}
              alt="user_image"
              width={40}
              height={40}
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.deleteUserButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUser;
