import React, { Suspense, useEffect, useState } from "react";
import { Link, defer, useParams, useNavigate, useLoaderData, useAsyncValue, Await } from "react-router-dom";

const Post = () => {
  const post = useAsyncValue();
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

const Comments = () => {
  const comments = useAsyncValue();
  return (
    <>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.email}</h3>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </>
  );
};

const SinglePage = () => {
  const { post, id, comments } = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate("/", { replace: true });

  return (
    <div>
      {post && (
        <>
          <button onClick={goBack}>Go back</button>
          <button onClick={goHome}>Go home</button>
          <Suspense fallback={<h2>Post is loading...</h2>}>
            <Await resolve={post}>
              <Post />
            </Await>
          </Suspense>
          <Suspense fallback={<h2>Comments are loading...</h2>}>
            <Await resolve={comments}>
              <Comments />
            </Await>
          </Suspense>

          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
};

async function getPostByid(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

async function getCommentsByPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  return res.json();
}

const postLoader = async ({ params }) => {
  const id = params.id;

  return defer({ post: await getPostByid(id), id, comments: getCommentsByPost(id) });
};

export { SinglePage, postLoader };
