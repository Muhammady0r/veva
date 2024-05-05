import Button from "./UIelements/Button";
import PhoneInput from "./UIelements/PhoneInput";
import TextInput from "./UIelements/TextInput";

// eslint-disable-next-line react/prop-types, no-unused-vars
function LogIn({ active }) {
  return active ? (
    <>
      <h4 className="font-bold text-[clamp(24px,2vw,32px)] text-start">
        Вход в личный кабинет
      </h4>
      <div className="my-6">
        <TextInput placeholder={"Логин"} type={"text"} />
      </div>
      <TextInput placeholder={"Пароль"} type={"password"} />

      <div className="flex items-center gap-[10px] mt-6 mb-[30px]">
        <input
          type="checkbox"
          className="w-6 h-6 bg-[#e4eaf3] border-0 outline-none rounded-[4px] cursor-pointer login__checkbox"
        />
        <p className="text-sm leading-[1.71] font-light">
          Я согласен на обработку персональных данных
        </p>
      </div>

      <Button>Войти в кабинет</Button>

      <p className="block text-center w-full text-[18px] font-light text-[#98a2b3] underline-offset-[5px] decoration-1 underline my-5">
        <a href="#\">Забыли пароль? Восстановить.</a>
      </p>

      <p className="text-start">
        Для регистрации обратитесь к менеджеру по телефону:{" "}
        <b>+998 55 519 90 90</b>
      </p>
    </>
  ) : (
    <>
      <h4 className="font-bold text-[clamp(24px,2vw,32px)] text-start">
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
