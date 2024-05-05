import Button from "./UIelements/Button";
import PhoneInput from "./UIelements/PhoneInput";
import TextInput from "./UIelements/TextInput";

function SignUp() {
  return (
    <div>
      <h4 className="font-bold text-[clamp(24px,2vw,32px)] text-start mb-6">
        Регистрация
      </h4>

      <TextInput placeholder={"Ваша фамилия и имя"} type={"text"} />
      <div className="my-[15px]">
        <PhoneInput />
      </div>
      <TextInput placeholder={"Укажите адрес доставки"} type={"text"} />
      <div className="flex items-center gap-[10px] mt-6 mb-[30px]">
        <input
          type="checkbox"
          className="w-6 h-6 bg-[#e4eaf3] outline-none border-none appearance-none rounded-[4px] cursor-pointer"
        />
        <p className="text-sm leading-[1.71] font-light">
          Я согласен на обработку персональных данных
        </p>
      </div>

      <Button>Зарегистрироваться</Button>
    </div>
  );
}

export default SignUp;
