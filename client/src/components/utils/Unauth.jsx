import { Link } from "react-router";
const Unauth = () => {
  return (
    <div
      className={`inset-0  flex items-center justify-center w-full h-auto dark:darkClass `}
    >
      <div className=" 0 rounded-2xl shadow-lg p-6 w-80 text-center">
        <h2 className="text-xl font-semibold   mb-4">You are not logged in</h2>
        <p className=" mb-6">Please login or sign up to continue.</p>
        <div className="flex justify-center gap-3">
          <Link
            to="/auth/login"
            className={`px-4 py-2 border border-black dark:darkClass   rounded-lg transition`}
          >
            Login
          </Link>
          <Link
            to="/auth/signup"
            className={`px-4 py-2 border border-black dark:darkClass rounded-lg transition`}
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauth;
