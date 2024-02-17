import NewPost from "../components/NewPost";
import { useAuth } from "../hook/useAuth";
import { redirect, useNavigate, useNavigation } from "react-router-dom";

const Createpost = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const navigation = useNavigation();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Create A New Post</h1>
      <NewPost submitting={navigation.state === "submitting"} />

      <br></br>

      <button
        onClick={() =>
          signout(() => {
            navigate("/", { replace: true });
          })
        }
      >
        Log Out
      </button>
    </div>
  );
};

const createPost = async ({ title, body, userId }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body, userId }),
  });

  const newPost = res.json();

  return newPost;
};

const createPostAction = async ({ request }) => {
  const formData = await request.formData();
  const newPost = {
    title: formData.get("title"),
    body: formData.get("body"),
    userId: formData.get("userId"),
  };
  console.log(newPost);

  const post = await createPost(newPost);
  console.log(post);

  return redirect("/posts/" + post.id);
};

export { Createpost, createPostAction };
