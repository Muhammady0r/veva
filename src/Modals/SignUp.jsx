import Button from "./UIelements/Button";
import PhoneInput from "./UIelements/PhoneInput";
import TextInput from "./UIelements/TextInput";

function SignUp({ closeFn, className }) {
  return (
    <div className={`${className}`}>
      <h4 className="font-bold text-[clamp(24px,2vw,32px)] text-start mb-6">
        Регистрация
      </h4>

      <TextInput placeholder={"Ваша фамилия и имя"} type={"text"} />
      <div className="my-[15px]">
        <PhoneInput />
      </div>
      <TextInput placeholder={"Укажите адрес доставки"} type={"text"} />
      <label
        className="flex items-center gap-[10px] mt-6 mb-[30px] select-none cursor-pointer"
        htmlFor="agree"
      >
        <input
          type="checkbox"
          className="w-6 h-6 bg-[#e4eaf3] outline-none border-none"
          id="agree"
        />
        <p className="text-sm leading-[1.71] font-light">
          Я согласен на обработку персональных данных
        </p>
      </label>

      <Button onClick={closeFn}>Зарегистрироваться</Button>
    </div>
  );
}

export default SignUp;
