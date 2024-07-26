'use client';
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import { useState, useCallback } from "react";
import MenuItem from "./MenuItem";
const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(()=> {
        setIsOpen((prev) => !prev);
    }, [])

    return ( 
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div className=" hidden items-center gap-2
                px-3 py-3  text-sm md:block rounded-full bg-neutral-100 transition cursor-pointer">
                    Airbnb your home
                </div>
                <div className="flex flex-row rounded-full gap-3 transition cursor-pointer
                md:py-1 md:px-2 bg-neutral-200 items-center p-3"
                onClick={toggleOpen}>
                    <AiOutlineMenu size={18}/>
                    <div className="hidden sm:block">
                        <Avatar/>
                    </div>
                </div>
            </div>
            {isOpen && 
            (
                <div className="absolute rounded-xl flex flex-col
                w:[40vw] md:w-3/4 bg-white shadow-md top-14 right-0 z-10">
                    <MenuItem label={"sign in"} onclick={()=> {}}/>
                    <MenuItem label={"sign in"} onclick={()=> {}}/>

                </div>
            )
            }
        </div>
     );
}
 
export default UserMenu;