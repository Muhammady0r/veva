import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import water from './water.png'
import "./Cards.css"
import { useState } from "react"

export const Cards = () => {

    let [counter, counterAdd] = useState(0)

    return (
        <section className="cards">
            <div className="container py-3">
                <h2 className="cards__heading font-bold 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl mb-10 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center">Магазин товаров</h2>
                <div className="cards__wrapper">
                    <ul className="cards__navigation flex mb-12 border-b flex-wrap 2xl:justify-start xl:justify-start lg:justify-start md:justify-start sm:justify-start">
                        <li className="m flex">
                            <Link className="cards__navigation-item bg-[#F2F4F7] text-black font-semibold rounded-s flex gap-2 px-6 py-3 items-center justify-center">Бутилированная вода<span className="bg-[#E9573F] text-[12px] text-white px-2 py-1 rounded-full">1</span></Link>
                        </li>
                        <li className="flex">
                            <Link className="cards__navigation-item hover:text-black text-[#98A2B3] rounded-sm flex gap-2 px-6 py-3 items-center justify-center">Помпа<span className="bg-[#E9573F] text-[12px] text-white px-2 py-1 rounded-full">5</span></Link>
                        </li>
                        <li className="flex">
                            <Link className="cards__navigation-item hover:text-black text-[#98A2B3] rounded-sm flex gap-2 px-6 py-3 items-center justify-center">Куллер<span className="bg-[#E9573F] text-[12px] text-white px-2 py-1 rounded-full">5</span></Link>
                        </li>

                    </ul>

                    <ul className="cards__list grid grid-cols-4 gap-7 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                        <li className="flex justify-center  ">
                            <Card className="cards__list-item 2xl:max-w-[320px] w-full xl:max-w-[320px] lg:max-w-[320px] md:max-w-[320px] sm:max-w-[320px] pt-5 grayscale opacity-60 border-none hover:grayscale-0 hover:opacity-100 hover:cursor-pointer">
                                <CardContent className="flex flex-col items-center justify-center gap-4">
                                    <img src={water} alt="" />
                                    <div className="text-center ">
                                        <CardDescription className="mb-2">Вода в бутилированной бутылке</CardDescription>
                                        <CardTitle>18,9 л.</CardTitle>
                                    </div>
                                </CardContent>
                                <CardFooter className="card-dropdown flex flex-col">
                                    <div className="flex gap-12 items-center mb-5">
                                        <div className="counter mb-5 flex gap-3 items-center justify-center bg-[#F2F4F7] py-3 px-2 rounded-lg">
                                            <i className="fa-solid text-lg text-[#1CBBEE] fa-chevron-left" onClick={() => {
                                                if (counter > 0) {
                                                    counterAdd(counter - 1)
                                                }
                                            }}></i>
                                            <span className="font-bold">{counter}</span>
                                            <i onClick={() => {
                                                counterAdd(counter + 1)
                                            }} className="fa-solid text-lg text-[#1CBBEE] fa-chevron-right"></i>
                                        </div>

                                        <div className="sum text-right">
                                            <h6 className="text-[#98A2B3] 2xl:text-sm xl:text-sm lg:text-sm md:text-sm">Итоговая стоимость:</h6>
                                            <h4 className="text-[#1CBBEE] 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl">{`${Number(counter) * 15} 000 сум`}</h4>
                                        </div>
                                    </div>
                                    <Button className="rounded-full w-full text-lg">Добавить в корзину</Button>
                                </CardFooter>
                            </Card>
                        </li>
                        <li className="flex justify-center  ">
                            <Card className="cards__list-item 2xl:max-w-[320px] w-full xl:max-w-[320px] lg:max-w-[320px] md:max-w-[320px] sm:max-w-[320px] pt-5 grayscale opacity-60 border-none hover:grayscale-0 hover:opacity-100 hover:cursor-pointer">
                                <CardContent className="flex flex-col items-center justify-center gap-4">
                                    <img src={water} alt="" />
                                    <div className="text-center ">
                                        <CardDescription className="mb-2">Вода в бутилированной бутылке</CardDescription>
                                        <CardTitle>18,9 л.</CardTitle>
                                    </div>
                                </CardContent>
                                <CardFooter className="card-dropdown flex flex-col">
                                    <div className="flex gap-12 items-center mb-5">
                                        <div className="counter mb-5 flex gap-3 items-center justify-center bg-[#F2F4F7] py-3 px-2 rounded-lg">
                                            <i className="fa-solid text-lg text-[#1CBBEE] fa-chevron-left" onClick={() => {
                                                if (counter > 0) {
                                                    counterAdd(counter - 1)
                                                }
                                            }}></i>
                                            <span className="font-bold">{counter}</span>
                                            <i onClick={() => {
                                                counterAdd(counter + 1)
                                            }} className="fa-solid text-lg text-[#1CBBEE] fa-chevron-right"></i>
                                        </div>

                                        <div className="sum text-right">
                                            <h6 className="text-[#98A2B3] 2xl:text-sm xl:text-sm lg:text-sm md:text-sm">Итоговая стоимость:</h6>
                                            <h4 className="text-[#1CBBEE] 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl">{`${Number(counter) * 15} 000 сум`}</h4>
                                        </div>
                                    </div>
                                    <Button className="rounded-full w-full text-lg">Добавить в корзину</Button>
                                </CardFooter>
                            </Card>
                        </li>
                        <li className="flex justify-center  ">
                            <Card className="cards__list-item 2xl:max-w-[320px] w-full xl:max-w-[320px] lg:max-w-[320px] md:max-w-[320px] sm:max-w-[320px] pt-5 grayscale opacity-60 border-none hover:grayscale-0 hover:opacity-100 hover:cursor-pointer">
                                <CardContent className="flex flex-col items-center justify-center gap-4">
                                    <img src={water} alt="" />
                                    <div className="text-center ">
                                        <CardDescription className="mb-2">Вода в бутилированной бутылке</CardDescription>
                                        <CardTitle>18,9 л.</CardTitle>
                                    </div>
                                </CardContent>
                                <CardFooter className="card-dropdown flex flex-col">
                                    <div className="flex gap-12 items-center mb-5">
                                        <div className="counter mb-5 flex gap-3 items-center justify-center bg-[#F2F4F7] py-3 px-2 rounded-lg">
                                            <i className="fa-solid text-lg text-[#1CBBEE] fa-chevron-left" onClick={() => {
                                                if (counter > 0) {
                                                    counterAdd(counter - 1)
                                                }
                                            }}></i>
                                            <span className="font-bold">{counter}</span>
                                            <i onClick={() => {
                                                counterAdd(counter + 1)
                                            }} className="fa-solid text-lg text-[#1CBBEE] fa-chevron-right"></i>
                                        </div>

                                        <div className="sum text-right">
                                            <h6 className="text-[#98A2B3] 2xl:text-sm xl:text-sm lg:text-sm md:text-sm">Итоговая стоимость:</h6>
                                            <h4 className="text-[#1CBBEE] 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl">{`${Number(counter) * 15} 000 сум`}</h4>
                                        </div>
                                    </div>
                                    <Button className="rounded-full w-full text-lg">Добавить в корзину</Button>
                                </CardFooter>
                            </Card>
                        </li>
                        <li className="flex justify-center  ">
                            <Card className="cards__list-item 2xl:max-w-[320px] w-full xl:max-w-[320px] lg:max-w-[320px] md:max-w-[320px] sm:max-w-[320px] pt-5 grayscale opacity-60 border-none hover:grayscale-0 hover:opacity-100 hover:cursor-pointer">
                                <CardContent className="flex flex-col items-center justify-center gap-4">
                                    <img src={water} alt="" />
                                    <div className="text-center ">
                                        <CardDescription className="mb-2">Вода в бутилированной бутылке</CardDescription>
                                        <CardTitle>18,9 л.</CardTitle>
                                    </div>
                                </CardContent>
                                <CardFooter className="card-dropdown flex flex-col">
                                    <div className="flex gap-12 items-center mb-5">
                                        <div className="counter mb-5 flex gap-3 items-center justify-center bg-[#F2F4F7] py-3 px-2 rounded-lg">
                                            <i className="fa-solid text-lg text-[#1CBBEE] fa-chevron-left" onClick={() => {
                                                if (counter > 0) {
                                                    counterAdd(counter - 1)
                                                }
                                            }}></i>
                                            <span className="font-bold">{counter}</span>
                                            <i onClick={() => {
                                                counterAdd(counter + 1)
                                            }} className="fa-solid text-lg text-[#1CBBEE] fa-chevron-right"></i>
                                        </div>

                                        <div className="sum text-right">
                                            <h6 className="text-[#98A2B3] 2xl:text-sm xl:text-sm lg:text-sm md:text-sm">Итоговая стоимость:</h6>
                                            <h4 className="text-[#1CBBEE] 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl">{`${Number(counter) * 15} 000 сум`}</h4>
                                        </div>
                                    </div>
                                    <Button className="rounded-full w-full text-lg">Добавить в корзину</Button>
                                </CardFooter>
                            </Card>
                        </li>
                        <li className="flex justify-center  ">
                            <Card className="cards__list-item 2xl:max-w-[320px] w-full xl:max-w-[320px] lg:max-w-[320px] md:max-w-[320px] sm:max-w-[320px] pt-5 grayscale opacity-60 border-none hover:grayscale-0 hover:opacity-100 hover:cursor-pointer">
                                <CardContent className="flex flex-col items-center justify-center gap-4">
                                    <img src={water} alt="" />
                                    <div className="text-center ">
                                        <CardDescription className="mb-2">Вода в бутилированной бутылке</CardDescription>
                                        <CardTitle>18,9 л.</CardTitle>
                                    </div>
                                </CardContent>
                                <CardFooter className="card-dropdown flex flex-col">
                                    <div className="flex gap-12 items-center mb-5">
                                        <div className="counter mb-5 flex gap-3 items-center justify-center bg-[#F2F4F7] py-3 px-2 rounded-lg">
                                            <i className="fa-solid text-lg text-[#1CBBEE] fa-chevron-left" onClick={() => {
                                                if (counter > 0) {
                                                    counterAdd(counter - 1)
                                                }
                                            }}></i>
                                            <span className="font-bold">{counter}</span>
                                            <i onClick={() => {
                                                counterAdd(counter + 1)
                                            }} className="fa-solid text-lg text-[#1CBBEE] fa-chevron-right"></i>
                                        </div>

                                        <div className="sum text-right">
                                            <h6 className="text-[#98A2B3] 2xl:text-sm xl:text-sm lg:text-sm md:text-sm">Итоговая стоимость:</h6>
                                            <h4 className="text-[#1CBBEE] 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl">{`${Number(counter) * 15} 000 сум`}</h4>
                                        </div>
                                    </div>
                                    <Button className="rounded-full w-full text-lg">Добавить в корзину</Button>
                                </CardFooter>
                            </Card>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
