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
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import "./Header.css"
import { Link } from 'react-router-dom'




const Header = () => {
    return (
        <>
            <header className='flex gap-5 w-full items-center justify-around border-1 pt-10'>
                <div className='flex items-center gap-3'>
                    <Sheet>
                        <SheetTrigger><i className="fa-solid fa-bars btn"></i></SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetDescription>
                                    <div className='soazla'>
                                        <Link className=' hvr' to="">Главная</Link>
                                        <Link className=' hvr' to="">Магазин товаров</Link>
                                        <Link className=' hvr' to="">Договор оферты</Link>
                                        <Link className=' hvr' to="">Сертификаты</Link>
                                    </div>
                                    <div className="tel">
                                        <p>Телефон:</p>
                                        <Link to="tel:+998 55 519 90 90">+998 55 519 90 90</Link>
                                    </div>
                                    <div className="fain">
                                        <i className="fain1 fa-brands fa-facebook-f fa-2xl"></i>
                                        <i className="fain2 fa-brands fa-instagram fa-2xl"></i>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                    <div className="img flex items-center gap-3">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className='flex gap-5 items-center links'>
                    <div className="links flex gap-5 items-center ">
                        <Link className='link hvr' to="/">Главная</Link>
                        <Link className='link hvr' to="https://meedweff.uz/veva">Магазин товаров</Link>
                    </div>

                    <AlertDialog>
                        <AlertDialogTrigger className="position border flex gap-3 cursor-pointer">
                            <i class="fa-solid fa-location-dot text-gray-600"></i>
                            <p>улица Мукими, 166</p>
                            <i class="fa-solid fa-check text-blue-500"></i>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Choose location</AlertDialogTitle>
                                <AlertDialogDescription>
                                    <br />
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>


                </div>
                <div className='flex gap-2 items-center '>
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Lng" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">RU</SelectItem>
                            <SelectItem value="dark">ENG</SelectItem>
                        </SelectContent>
                    </Select>

                    <button type='button' className="acc items-center flex gap-5 border border-1r ">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className='voyti'>Войти в кабинет</p>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header
