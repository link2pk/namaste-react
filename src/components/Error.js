import { Link, useLocation, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const { pathname } = useLocation();
  const { status, statusText } = error;

  return (
    <>
      <h3>
        {status} Page {statusText}
      </h3>
      <p>Sorry! No page found for {pathname}</p>
      <Link className="text-blue-600 hover:underline" to={"/"}>
        Go to homepage ⏎
      </Link>
    </>
  );
};

export default Error;
