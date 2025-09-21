export const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-9xl font-bold text-indigo-500">404</h1>
      <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-gray-400 text-center max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-3 bg-indigo-600 rounded-2xl shadow-lg hover:bg-indigo-500 transition-all"
      >
        Go Back Home
      </a>
    </div>
  );
};
