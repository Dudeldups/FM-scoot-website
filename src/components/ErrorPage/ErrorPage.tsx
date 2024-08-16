import { Link, useRouteError } from "react-router-dom";

type ErrorPageProps = {
  message?: string;
};

type RouteError = {
  status?: number;
  statusText?: string;
  message?: string;
};

const ErrorPage = ({ message }: ErrorPageProps) => {
  const error = useRouteError() as RouteError | null;

  return (
    // TODO: Style the error page

    <div style={{ textAlign: "center", marginBlock: "50px" }}>
      <h1>Oops! Something went wrong.</h1>
      {message ? (
        <p>{message}</p>
      ) : (
        <>
          <p>
            {error?.statusText ||
              error?.message ||
              "An unexpected error occurred."}
          </p>
        </>
      )}
      <Link
        to="/"
        style={{
          color: "#007bff",
          textDecoration: "none",
        }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
