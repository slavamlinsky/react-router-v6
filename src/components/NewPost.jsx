import { Form } from "react-router-dom";

const NewPost = ({ submitting }) => {
  return (
    <Form action="/posts/new" method="post" style={{ display: "flex", flexDirection: "column", gap: "0.5em" }}>
      <label style={{ display: "flex", justifyContent: "space-between" }}>
        Title:
        <input type="text" name="title" />
      </label>
      <label style={{ display: "flex", justifyContent: "space-between" }}>
        Body:
        <input type="text" name="body" />
      </label>
      <input type="hidden" name="userId" value="1" />
      <input type="submit" value="Add Post" disabled={submitting} />
    </Form>
  );
};

export default NewPost;
