import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import registerImg from "../../assets/lottie/registerImg.json";

const Register = () => {
  const navigate = useNavigate();
  const { handleRegister, manageProfile, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  // handle register
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!regex.test(password)) {
      toast.error(
        "Must have a Uppercase and Lowercase letter in the password  ",
        {
          position: "top-center",
        }
      );
      return;
    }

    if (password.length < 6) {
      toast.error("Length must be at least 6 character", {
        position: "top-center",
      });
      return;
    }

    handleRegister(email, password).then((res) => {
      console.log(res.user);
      manageProfile(name, photo);
      setUser({ displayName: name, photoURL: photo, email: email });
      toast.success("Register is successfully", {
        position: "top-center",
      });
      navigate("/");
    });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center lg:text-left lg:w-5/12">
          <Lottie animationData={registerImg} loop={true} />;
        </div>
        <div className="card bg-base-100 shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <h3 className="text-center text-2xl font-bold">
              Register Your Account
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo-url"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control mt-4 -mb-8">
              <button className="btn border border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white text-lg">
                Register
              </button>
            </div>
          </form>
          <p className="text-center font-semibold my-3">
            Already Have an account ?{" "}
            <Link className="text-red-500" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
