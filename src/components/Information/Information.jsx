import "./Information.css"
import { Button } from "../ui/button"

export const Information = () => {
    return (
        <div className="information">
            <h2 className="information__heading">Личная информация</h2>

            <div className="table max-w-[735px]">
                <div className=" gap-1">
                    <h5>Фамилия и имя:</h5>
                    <h5>Никифоров Михаил</h5>
                </div>
                <div className=" gap-1">
                    <h5>Номер телефона:</h5>
                    <h5>+ 998 90 124-25-25 <br /> + 998 90 124-25-25</h5>
                </div>
                <div className=" gap-1">
                    <h5>Ваш адрес №1:</h5>
                    <h5>г. Ташкент, улица Мукими, 166 ...</h5>
                </div>
                <div className=" gap-1">
                    <h5>Ваш адрес №2:</h5>
                    <h5>г. Ташкент, улица Мукими, 166 ...</h5>
                </div>
            </div>

            <Button className={"information__button bg-[#F2F4F7] text-black px-9 py-6 font-bold rounded-full hover:bg-[#d0d2d4]"}>
                <i className="fa-regular fa-pen-to-square"></i>
                Редактировать
            </Button>

        </div>
    )
}
