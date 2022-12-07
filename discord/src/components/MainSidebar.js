import React from "react";
import { BsChevronDown } from "react-icons/bs"

const MainSidebar = (props) => {
    let bgImg = props.image
    return (
        <div className='h-full w-60 bg-[#2F3137] rounded-tl-md flex flex-col'>
            <div className="h-32 rounded-tl-md" style={{backgroundImage: `url(${bgImg})`, backgroundPosition: 'center'}}>
                <div className="py-5 px-3 flex content-center gap-16 text-white">{props.name} <BsChevronDown className="w-5"/></div> 
                
            </div>
                
        </div>
    )
}

export default MainSidebar