import { Form } from "react-router-dom";

const UpdatePost = ({ id, title, body, userId, submitting }) => {
  return (
    <Form action={`/posts/${id}/edit`} method="post" style={{ display: "flex", flexDirection: "column", gap: "0.5em" }}>
      <label style={{ display: "flex", justifyContent: "space-between" }}>
        Title:
        <input type="text" name="title" defaultValue={title} />
      </label>
      <label style={{ display: "flex", justifyContent: "space-between" }}>
        Body:
        <input type="text" name="body" defaultValue={body} />
      </label>
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="id" value={id} />
      <input type="submit" value="Update Post" disabled={submitting} />
    </Form>
  );
};

export default UpdatePost;
