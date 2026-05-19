import axios from 'axios';
import { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState('lo');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5555/login", {
        emailId: emailId,
        password: password,
        rememberMe: rememberMe,
      }, { withCredentials: true });
      console.log(res.data);
    } catch (error) {
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full bg-base-100">
      <div className="card w-96 bg-base-200 shadow-2xl border border-base-300">
        <div className="card-body">
          {/* Heading */}
          <h2 className="card-title text-2xl font-bold">
            Login
          </h2>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email ID</span>
            </label>
            <input
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="Enter email"
              className="input input-bordered input-md"
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="input input-bordered input-md"
            />
          </div>

          {/* Remember me */}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Remember me</span>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="checkbox checkbox-sm"
              />
            </label>
          </div>

          {/* Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="btn btn-primary btn-md mt-4"
          >
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
          </button>

          {/* Sign up link */}
          <div className="divider">OR</div>
          <p className="text-center text-sm">
            Don't have an account?{' '}
            <a href="/signup" className="link link-primary font-semibold">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;