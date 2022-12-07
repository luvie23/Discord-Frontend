import React from "react";
import { BsChevronDown } from "react-icons/bs"

const Channel = (props) =>{
    return (
        <div className="text-[#93959B] flex items-center gap-2 ml-1 font-bold">
           <BsChevronDown size='0.7rem'/> {props.name.toUpperCase()}
        </div>
    )
}

export default Channel