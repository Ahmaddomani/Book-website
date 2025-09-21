// src/components/Signup.jsx
import { useRef, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    userName: "",
    email: "",
    role: "user",
    password: "",
    confirmPassword: "",
  });
  const pError = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    pError.current.textContent = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/signup",
        form,
        { withCredentials: true }
      );
      console.log(response.data.data);
      window.localStorage.role = response.data.data.role;
      history.back();
    } catch (err) {
      const msg = err?.response?.data?.message;
      pError.current.textContent = msg;
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center  dark:darkClass`}
    >
      <div
        className={` dark:bg-gray-800 dark:text-slate-100 p-8 rounded-lg shadow-lg w-full max-w-md`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center ">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* User Name */}
          <div>
            <label className="block  mb-1">User Name</label>
            <input
              value={form.userName}
              name="userName"
              type="text"
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:darkClass`}
              placeholder="Your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block  mb-1">Email</label>
            <input
              value={form.email}
              name="email"
              type="email"
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:darkClass`}
              placeholder="example@gmail.com"
              required
            />
          </div>

          {/* Role */}
          <div>
            <label className="block  mb-1">Role</label>
            <select
              value={form.role}
              name="role"
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:darkClass`}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block  mb-1">Password</label>
            <input
              value={form.password}
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:darkClass `}
              placeholder="********"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9  text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block 0 mb-1">Confirm Password</label>
            <input
              value={form.confirmPassword}
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:darkClass `}
              placeholder="********"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-9  text-sm"
            >
              {showConfirm ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors"
          >
            Signup
          </button>
        </form>
        <p ref={pError} className="error text-center m-3 text-rose-500"></p>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Do you have an account?{" "}
          <Link to="/auth/login" className="text-purple-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
