/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function TextInput({ placeholder, data, setData, fullname, address }) {
  function handleChange(e) {
    if (fullname) setData({ ...data, fullName: e.target.value });
    if (address == "address_0") setData({ ...data, address1: e.target.value });
    if (address == "address_1") setData({ ...data, address2: e.target.value });
  }

  // console.log(address);
  return (
    <>
      <input
        className="py-[14px] px-[15px] rounded-lg bg-[#f2f4f7] w-full outline-none font-light text-lg leading-[1.34]"
        // type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
}

export default TextInput;

/* // eslint-disable-next-line react/prop-types
function TextInput({ placeholder, state, setState, fullname, address }) {
  function handleChange(e) {
    const value = e.target.value;
    if (fullname) {
      setState({ ...state, fullName: value });
    } else if (address === "address_0") {
      setState({ ...state, address1: value });
    } else {
      setState({ ...state, address2: value });
    }
  }

  return (
    <input
      className="py-[14px] px-[15px] rounded-lg bg-[#f2f4f7] w-full outline-none font-light text-lg leading-[1.34]"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default TextInput; */
