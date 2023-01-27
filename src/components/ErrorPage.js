import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  console.log(err);
  return (
    <div className="container">
      <h1>{status}</h1>
      <h1>{statusText}</h1>
    </div>
  );
};

export default ErrorPage;
