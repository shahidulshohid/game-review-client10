
const Register = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-300 w-full max-w-lg shrink-0 p-4">
        <h2 className="text-3xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email" ref={emailRef}
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered "
              required
            />
            <label onClick={handleForgetPassword} className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-xl font-semibold">
              Login
            </button>
          </div>
        </form>
        <div className="text-left pl-7 -mt-6">
          <button
            className="btn bg-secondary text-white hover:text-secondary text-lg"
            // onClick={handleGoogleLoginHandler}
          >
            Logon with Google
          </button>
        </div>
        <p className="text-center font-semibold">
          Don't have an account please ?{" "}
          <Link to="/register" className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Register;