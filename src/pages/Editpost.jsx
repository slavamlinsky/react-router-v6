import { useLoaderData, useActionData, useNavigation /*useParams*/ } from "react-router-dom";
import UpdatePost from "../components/UpdatePost";

const Editpost = () => {
  const data = useActionData();
  const { post, id } = useLoaderData();
  const navigation = useNavigation();
  console.log(post);
  return (
    <div>
      {data?.message && <div style={{ color: "blueviolet" }}>{data.message}</div>}
      <h1>Edit Post</h1>
      <h1>Post Id {id}</h1>
      <UpdatePost {...post} submitting={navigation.state === "submitting"} />
    </div>
  );
};

const updatePost = async (post) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.get("id")}`, {
    method: "PUT",
    body: post,
  });

  return res.json();
};

const updatePostAction = async ({ request }) => {
  const formData = await request.formData();
  if (!formData.get("title") || !formData.get("body")) {
    return { message: "All fields are required!" };
  }

  const updatedPost = await updatePost(formData);

  return { message: `Post ${updatedPost.id} was succesfully updated` };
};

export { Editpost, updatePostAction };
