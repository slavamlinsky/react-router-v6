import { Route, Navigate, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/Aboutpage";
import { Blogpage, blogLoader } from "./pages/Blogpage";
import Notfoundpage from "./pages/Notfoundpage";
import Layout from "./components/Layout";
import { SinglePage, postLoader } from "./pages/SinglePage";
import { Createpost, createPostAction } from "./pages/Createpost";
import { Editpost, updatePostAction } from "./pages/Editpost";
import Loginpage from "./pages/Loginpage";
import RequireAuth from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
import Errorpage from "./pages/Errorpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route part="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="login" element={<Loginpage />} />
      {/* * после / нужна когда роуты указаны на вложенной странице */}
      {/* <Route path="about/*" element={<About />}> */}
      <Route path="about/*" element={<About />}>
        <Route path="contacts" element={<p>Our contacts</p>} />
        <Route path="team" element={<p>Our team</p>} />
        <Route path="career" element={<p>Our vacancies</p>} />
      </Route>
      <Route path="about-us" element={<Navigate to="about" replace />} />
      <Route path="posts" element={<Blogpage />} loader={blogLoader} errorElement={<Errorpage />} />
      {/* <Route path="posts/:category/:product/:id" element={<SinglePage />} /> */}
      <Route path="posts/:id" element={<SinglePage />} loader={postLoader} />
      <Route
        path="posts/new"
        element={
          <RequireAuth>
            <Createpost />
          </RequireAuth>
        }
        action={createPostAction}
      />
      <Route
        path="posts/:id/edit"
        element={
          <RequireAuth>
            <Editpost />
          </RequireAuth>
        }
        loader={postLoader}
        action={updatePostAction}
      ></Route>
      <Route path="*" element={<Notfoundpage />} />
    </Route>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
