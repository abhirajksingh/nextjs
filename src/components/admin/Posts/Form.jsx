"use client";
import styles from "./posts.module.css";
import { useFormState } from "react-dom";
import { addPost } from "@/lib/action";

const PostsForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <div>
      <p className={styles.heading}>Add New Post</p>
      <form action={formAction} className={styles.form}>
        <input type="hidden" name="userId" value={userId} />
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Slug" name="slug" />
        <input type="text" placeholder="Images Url" name="img" />
        <textarea type="text" placeholder="Description" name="desc" />
        <button>Add Post</button>
        {state && state.error}
      </form>
    </div>
  );
};

export default PostsForm;
