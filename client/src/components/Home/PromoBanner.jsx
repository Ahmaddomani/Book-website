import BookImg from "../../../public/Images/BookIcon.webp";

export const PromoBanner = () => {
  return (
    <div
      className={`custom-padding item dark:darkClass  flex md:flex-row xs:flex-col-reverse  justify-between items-center gap-4 py-10`}
    >
      {/* Texts Start  */}
      <div className="texts xs:text-center md:text-start ">
        <h2 className="text-5xl font-bold">
          <span className="text-green-600">2025</span> National Book Awards for
          Fiction Shortlist
        </h2>
        <button className="text-white bg-blue-700 hover:bg-green-600 duration-150 p-2 rounded-lg mt-6">
          Get Promo Code{" "}
        </button>
      </div>
      {/* Img Start  */}
      <img src={BookImg} alt="" className="w-1/2 h-[200px] object-contain" />
      {/* Img End */}
      {/* Texts End */}
    </div>
  );
};
