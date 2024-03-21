import { getUser } from "@/lib/data";
import style from "./postUser.module.css";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  console.log(user);
  return (
    <div className={style.container}>
      <span className={style.title}>Author</span>
      <span className={style.username}>{user.username}</span>
    </div>
  );
};

export default PostUser;
