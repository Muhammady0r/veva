import React from 'react'
import img1 from './img/img1.png'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"




const Header = () => {
    return (
        <>
            <header className='flex gap-5 w-full items-center justify-around border-1 p-10'>
                <div className="img flex">
                    <img src={img1} alt="" />
                </div>
                <div className='flex gap-5 items-center'>
                    <div className="links flex gap-5 items-center ">
                        <a className='link hvr' href="/">Главная</a>
                        <a className='link hvr' href="">Магазин товаров</a>
                    </div>
                    <div className="position">

                    </div>
                </div>
                <div className='flex gap-2 items-center borderr-1'>
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Lng" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">RU</SelectItem>
                            <SelectItem value="dark">ENG</SelectItem>
                        </SelectContent>
                    </Select>

                    <button type='button' className="acc items-center flex gap-5 border border-1r">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p>Войти в кабинет</p>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header
