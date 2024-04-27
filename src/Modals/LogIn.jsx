import Button from "./Button";
import PhoneInput from "./PhoneInput";

// eslint-disable-next-line react/prop-types, no-unused-vars
function LogIn({ active }) {
  return (
    <>
      <h4 className="font-bold text-[32px] text-start">
        Вход в личный кабинет
      </h4>
      <div className="mt-6 mb-[30px]">
        <PhoneInput />
      </div>

      <Button>Получить СМС</Button>
      <p className="block text-center w-full text-[18px] font-light text-[#98a2b3] underline-offset-[5px] decoration-1 underline mt-5">
        <a href="#\">Зарегистрироваться</a>
      </p>
    </>
  );
}

export default LogIn;
