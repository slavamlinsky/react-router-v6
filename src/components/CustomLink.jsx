import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch({ path: to, end: to.length === 1 });
  //   console.log(match);
  return (
    <Link to={to} style={{ color: match ? "#87AA87" : "white" }} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
