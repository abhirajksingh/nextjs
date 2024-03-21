import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPost from "@/components/admin/Posts/Posts";
import PostsForm from "@/components/admin/Posts/Form";
import UsersForm from "@/components/admin/Users/Form";
import AdminUser from "@/components/admin/Users/Users";
import { auth } from "@/lib/auth";

const AdminPage = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPost />
          </Suspense>
        </div>
        <PostsForm userId={session.user.id} />

        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUser />
          </Suspense>
        </div>
        <UsersForm userId={session.user.id} />
      </div>
    </div>
  );
};

export default AdminPage;
