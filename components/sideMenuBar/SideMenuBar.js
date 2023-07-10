import Image from "next/image";
import kimeLogo from "../../public/Kimedics.png"
import kimeCircular from "../../public/kimedics-circular.png"
import Menus from "../../utils/list-items";
import { MdOutlineDashboard } from "react-icons/md";
import {useEffect, useState} from "react";
import {HospitalsList} from "@/components/hospitalsList";


export const SideMenuBar = () => {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState("");
    const [subMenuSelected, setSubMenuSelected] = useState("");
    const [api, setApi] = useState([]);

    useEffect(()=>{
        fetch("/api/getPractices").then(data => data.json())
            .then(r => {
                setApi(r);
            })
    }, []);

    const handleMenuTitleClick = async (itemId) => {
        setSelected(itemId);
        if (itemId === "PRACTICES") {
            setOpen(!open);
        };
    };

    return (
        <div className={"flex h-screen max-h-screen w-screen"}>
            <div className={`bg-blue-ki h-screen pt-11 ${open ? "w-60 p-8" : "w-14 p-3"} duration-300`}>
                <div className={`logo-container inline-flex ${open ? "w-120 h-11" : "w-8 h-8"}`}>
                    <Image src={open ? kimeLogo : kimeCircular} alt={"Logo Kimedics"} className={"w-full h-full duration-300"}/>
                </div>

                <ul className={"pt-2 cursor-pointer"}>
                    {Menus.map((menu, index) => (
                        <>
                            <li key={index} className={`text-white text-sm flex items-center gap-x-3 ${menu.spacing && open ? "mt-12" : menu.spacing && !open ? "mt-48" : "mt-2"}`} onClick={() => { handleMenuTitleClick(menu.title.toUpperCase()) }
                            }>
                            <span className={`block float-left ${menu.title.toUpperCase() === selected ? "text-cyan-400" : !open && menu.title.toUpperCase() !== selected ? "text-white" : "text-teal-600"} ${open ? "mt-2" : "mx-1 mt-3.5 p-1"}`}>
                                {menu.icon ? menu.icon : <MdOutlineDashboard />}
                            </span>
                                <span className={`text-sm flex-1 pt-1.5 ${menu.title.toUpperCase() === selected ? "font-bold" : "font-normal"} ${!open && "hidden"} duration-300`}>{menu.title.toUpperCase()}</span>
                            </li>
                            {menu.submenu && open && (
                                <ul>
                                    {
                                        menu.submenuItems.map((submenu,index) => (
                                            <li key={index} className={`text-white text-xs flex items-center ${submenu.title === subMenuSelected && selected === "PROVIDERS" ? "font-bold text-cyan-300" : "font-normal"} cursor-pointer gap-x-3 py-1.5 px-7`} onClick={() => {setSubMenuSelected(submenu.title)}}>
                                                <span>{submenu.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            )}
                        </>
                    ))}
                </ul>
            </div>
            {selected === "PRACTICES" && !open && <HospitalsList Hospitals={api.data}/>}
        </div>
    )
}