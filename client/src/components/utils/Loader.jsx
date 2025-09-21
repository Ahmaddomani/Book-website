export const Loader = ({ heightFull }) => {
  console.log(heightFull);
  return (
    <div
      className={`flex justify-center items-center ${
        heightFull && "min-h-screen w-full"
      }`}
    >
      <div className="w-16 h-16 border-8 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
};
