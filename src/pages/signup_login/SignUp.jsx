import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    createUser(email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content gap-[8rem] flex-col-reverse lg:flex-row">
        <div className="mr-15">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center mt-2 font-bold">Sign Up now!</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="Confirm password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="signup" className="btn btn-primary" />
            </div>
          </form>
          <p className="text-center text-bold my-4">
            Already have an Account?{" "}
            <Link to="/login" className="text-orange-500 text-bold text-1xl">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
