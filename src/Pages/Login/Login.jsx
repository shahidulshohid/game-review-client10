import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const { handleGoogleLogin, handleLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  // handle register
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogin(email, password)
    .then((res) => {
      toast.success("Login is successfully", {
        position: "top-center",
      });

      if (location.state) {
        navigate(location.state.from);
      } else {
        navigate("/");
      }
    });
  };
  const handleGoogleLoginHandler = () => {
    handleGoogleLogin()
    if (location.state) {
      navigate(location.state.from);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h3 className="text-center text-2xl font-bold">Login Your Account</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-5 top-12"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="form-control mt-4">
            <button className="btn border border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white text-lg">
              Login
            </button>
          </div>
        </form>
        <div className="text-left pl-7 -mt-6">
          <button
            className="btn border border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white text-lg"
            onClick={handleGoogleLoginHandler}
          >
            Logon with Google
          </button>
        </div>
        <p className="text-center font-semibold my-3">
          Already Have an account ?{" "}
          <Link className="text-red-500" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
