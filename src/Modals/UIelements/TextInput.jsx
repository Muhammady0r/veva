// eslint-disable-next-line react/prop-types
function TextInput({ placeholder, type }) {
  return (
    <input
      className="py-[14px] px-[15px] rounded-lg bg-[#f2f4f7] w-full outline-none text-lg leading-[1.34]"
      type={type}
      placeholder={placeholder}
    />
  );
}

export default TextInput;
