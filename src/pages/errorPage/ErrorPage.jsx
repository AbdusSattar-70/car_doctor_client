import { useNavigate, useRouteError } from "react-router-dom";
import errorPhoto from "../../assets/images/error/error.png";
const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <img src={errorPhoto} alt="" />
      <div className="flex justify-between">
        <p className="text-5xl text-red-500 text-bold">
          <i>{error.statusText || error.message}</i>
        </p>
        <button className="btn btn-outline" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
