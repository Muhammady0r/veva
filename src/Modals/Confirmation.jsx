import Button from "./Button";
import CodeInput from "./CodeInput";

// eslint-disable-next-line react/prop-types
function Confirmation() {
  // return active ? <CodeInput /> : <CodeInput />;
  return (
    <>
      <h4 className="font-bold text-[32px] text-start">Введите код из СМС</h4>
      <div className="mt-[24px] mb-[30px]">
        <CodeInput />
      </div>
      <Button>Войти в кабинет</Button>
      <p className="block text-center w-full text-[18px] font-light text-[#98a2b3] underline-offset-[5px] decoration-1 underline mt-5">
        <a href="#\">Повторить отправку кода (54 сек)</a>
      </p>
    </>
  );
}

export default Confirmation;
