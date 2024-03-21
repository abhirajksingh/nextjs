import { addPost, deletePost } from "@/lib/action";

const ServerActionPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Description" name="desc" />
        <input type="text" placeholder="Slug" name="slug" />
        <input type="text" placeholder="User Id" name="userId" />
        <button>Create</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="Post Id" name="id" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionPage;
