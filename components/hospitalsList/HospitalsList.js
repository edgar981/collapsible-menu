import { BiSearchAlt2} from "react-icons/bi";
import { MdOutlineDashboard, MdOutlineLocationOn, MdKeyboardArrowDown, MdOutlineFilterList } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import {useState} from "react";
import {log} from "next/dist/server/typescript/utils";
import Hospitales from "../../utils/datos";
import {Dropdown} from "@/components/Dropdown";

export const HospitalsList = ({Hospitals}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedItems([...selectedItems, value]);
        } else {
            setSelectedItems(selectedItems.filter((item) => item !== value));
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const data = Hospitals?.length === 0 ? Hospitales : Hospitals;

    const handleSelectAll = () => {
        const allItemLabels = data.map((item) => item.name);
        setSelectedItems(allItemLabels);
    };

    const handleDeselectAll = () => {
        setSelectedItems([]);
    };

    const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleFilterClick = () => {

    }

    return (
        <>
            <div className={"ml-8 py-3 bg-white w-screen h-screen flex"}>
                <div className={"h-full py-4 duration-600"}>
                    <div className={"flex items-center bg-white rounded cursor-pointer border-2 w-[210px] h-9 px-1 py-2"}>
                        <MdOutlineLocationOn className={"text-teal-500 text-sm block float-left mr-1"}/>
                        <div>
                            <span className={"text-sm text-slate-400"}>Practice</span>
                        </div>
                        <MdKeyboardArrowDown className={"text-teal-500 w-6 block float-right ml-24 mr-1"}/>
                    </div>
                    <div className={"flex"}>
                        <div className={"flex items-center bg-white rounded border-2 w-[250px] h-9 px-1 py-2 mt-2"}>
                            <BiSearchAlt2 className={"text-teal-500 text-sm block float-left mr-1"}/>
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className={"text-sm bg-transparent w-full text-slate-500 focus:outline-none"}
                            />
                        </div>
                        <Dropdown />
                    </div>
                    <div className={"pt-4 px-2 pb-2 flex"}>
                        <label className={"flex cursor-pointer relative"}>
                            <input
                                type="checkbox"
                                id={"check-box-1"}
                                checked={selectedItems.length === data.length}
                                onChange={
                                    selectedItems.length === data.length
                                        ? handleDeselectAll
                                        : handleSelectAll
                                }
                                className={"appearance-none w-3.5 h-4 border-2 border-teal-500 rounded mt-1"}
                            />
                            <FaCheck
                                className={"absolute top-1 right h-4 w-3.5 scale-75 text-teal-500 text-opacity-0 check-1"}/>
                        </label>
                        <label className={"px-2 text-teal-500 font-semibold"}>All</label>
                        <span className={"text-xs font-bold ml-72 py-1 text-teal-500"}>Jobs</span>
                    </div>
                    <ul className={"h-5/6 overflow-y-auto overflow-x-hidden mt-1"}>
                        {filteredItems.map((item, index) => (
                            <div className={"cursor-pointer w-full hover:bg-gray-100"} key={index}>
                                <li className={"p-1 flex"} >
                                    <label key={item.id}>
                                        <div className={"flex p-1"}>
                                            <label className={"flex cursor-pointer relative"}>
                                                <input
                                                    type="checkbox"
                                                    value={item.name}
                                                    id={"check-box-1"}
                                                    checked={selectedItems.includes(item.name)}
                                                    onChange={handleCheckboxChange}
                                                    className={"appearance-none w-3.5 h-4 border-2 border-teal-500 rounded mt-1"}
                                                />
                                                <FaCheck
                                                    className={"absolute top-1 right h-4 w-3.5 scale-75 text-teal-500 text-opacity-0 check-1"}/>
                                            </label>
                                            <div className={"w-64 px-2 text-slate-600"}>
                                                <label>{item.name}</label>
                                            </div>
                                        </div>
                                    </label>
                                    <span
                                        className={"mt-2 mr-1 ml-16 text-xs font-medium text-teal-500"}>({item.totalBeds})</span>
                                </li>
                            </div>
                        ))}
                    </ul>

                </div>
            </div>
        </>
    )
}