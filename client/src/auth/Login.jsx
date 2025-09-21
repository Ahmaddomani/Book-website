// src/components/Login.jsx
import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router";

// import { UserContext } from "../context/UserContext";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const pError = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    pError.current.textContent = "";
  };

  const handleSubmit = async (e) => {
    const { email, password } = form;
    e.preventDefault();
    console.log(form);
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        { email, password },
        {
          withCredentials: true,
        }
      );
      console.log(response);
      // setUser(response.data.data);
      history.back();
    } catch (err) {
      console.log(err);
      setError(err);
      pError.current.textContent = err?.response?.data?.message || "";
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center dark:darkClass `}
    >
      <div
        className={` dark:bg-gray-800 dark:text-slate-100  p-8 rounded-lg shadow-lg w-full max-w-md`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center ">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block  mb-1">Email</label>
            <input
              type="email"
              onChange={handleChange}
              className={`w-full px-4 py-2 dark:darkClass rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 `}
              placeholder="example@gmail.com"
              required
              name="email"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block  mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              className={`w-full px-4 py-2 dark:darkClass rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400`}
              placeholder="********"
              required
              name="password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors"
          >
            {!loading ? "Login" : "...Login"}
          </button>
        </form>
        <p ref={pError} className="error text-center m-3 text-rose-500">
          {error?.response?.data?.message || ""}
        </p>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-purple-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
