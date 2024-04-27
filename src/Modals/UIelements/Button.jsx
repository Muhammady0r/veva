// eslint-disable-next-line react/prop-types
function Button({ children }) {
  return (
    <button className="bg-black rounded-full py-[16px] text-white w-full tex-[18px] font-bold leading-[156%]">
      {children}
    </button>
  );
}

export default Button;
