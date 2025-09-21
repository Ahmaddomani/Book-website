export const Header = ({ children, HeaderText }) => {
  return (
    <div className={`md:py-[70px] md:px-[50px]  dark:darkClass  `}>
      <h1 className="text-5xl font-bold text-center mb-[50px]">{HeaderText}</h1>
      {children}
    </div>
  );
};
