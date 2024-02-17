import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <h3>{error.data.message || "Something goes wrong!!!"}</h3>
        <h4>{error.data.reason}</h4>
      </div>
    );
  }

  //   return <div>'Something goes wrong!'</div>
  throw error;
};

export default Errorpage;
