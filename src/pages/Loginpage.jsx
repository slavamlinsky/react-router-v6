import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const Loginpage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const fromPage = location?.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    console.log(event.target.username.value);
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;
    console.log(user);
    signin(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div>
      <h1>Login Page</h1>
      {fromPage}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name: <input type="text" name="username" id="name" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Loginpage;
