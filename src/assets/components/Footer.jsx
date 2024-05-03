import "./Footer.css"
import { Button } from "@/components/ui/button"
import logo from "./logo.svg"
import facebook from "./facebook.svg"
import instagram from "./instagram.svg"
import telegramBlue from "./telegram_blue.svg"

export const Footer = () => {
    return (
        <section className="footer p-2">
            <div className="container grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 border-t-2 2xl:pt-8 xl:pt-8 lg:pt-6 md:pt-6 sm:pt-6 2xl:gap-12 xl:gap-12 lg:gap-8 md:gap-8 md:grid-cols-2 sm:grid-cols-2">
                <div className="footer__left flex items-center 2xl:justify-between xl:justify-between lg:justify-center     2xl:gap-0 xl:gap-0 lg:gap-24 md:gap-3 md:justify-between 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse md:items-start sm:flex-col-reverse sm:items-start sm:gap-3 sm:justify-between">
                    <a href="" className="footer__logo 2xl:block xl:block lg:block md:hidden sm:hidden"><img src={logo} alt="" /></a>
                    <div>
                        <h6 className="2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs">VEVA © <br /> Все права защищены. 2023</h6>
                    </div>
                    <ul>
                        <li><a href="" className="underline 2xl:text-base xl:text-base lg:text-sm">Договор оферты</a></li>
                        <li><a href="" className="underline 2xl:text-base xl:text-base lg:text-sm">Сертификаты</a></li>
                    </ul>
                </div>
                <div className="footer__right flex 2xl:justify-between xl:justify-between lg:justify-center 2xl:gap-0 xl:gap-0 lg:gap-60 md:justify-center md:gap-3 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse 2xl:items-center xl:items-center lg:items-center md:items-end sm:justify-center sm:flex-col-reverse sm:items-end sm:gap-3">
                    <ul className="flex items-center justify-center 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-3 sm:gap-2">
                        <li><a href="" className="border text-black flex 2xl:p-4 xl:p-4 lg:p-4 md:p-4 sm:p-3 rounded-full"><img src={facebook} alt="" /></a></li>
                        <li><a href="" className="border text-black flex 2xl:p-4 xl:p-4 lg:p-4 md:p-4 sm:p-3 rounded-full"><img src={instagram} alt="" /></a></li>
                        <li><a href="" className="tg-but border border-[#1CBBEE] rounded-full 2xl:px-5 xl:px-5 lg:px-5 md:px-4 sm:px-3 py-2 flex gap-3">
                            <img src={telegramBlue} alt="" />
                            <div>
                                <h5 className="2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs">Заказать через</h5>
                                <h6 className="2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs font-bold">телеграмм бот</h6>
                            </div>
                        </a></li>
                    </ul>
                    <div className="text-right">
                        <a href=""  >Телефон: <br /> <span className="font-bold">
                            +998 55 519 90 90</span></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
