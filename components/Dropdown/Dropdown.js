import {MdOutlineFilterList} from "react-icons/md";
import {useState} from "react";


export const Dropdown = () => {

    return (
        <div className={"relative flex justify-center items-center"}>
            <button className={"relative flex mt-3 ml-4 scale-150 text-teal-500 cursor-pointer group "}>
                <MdOutlineFilterList />
            </button>
        </div>
    )
}