import React from "react";
import { BsChevronDown } from "react-icons/bs"
import Channel from './Channel'

const MainSidebar = (props) => {
    let bgImg = props.image
    return (
        <div className='h-full w-60 bg-[#2F3137] rounded-tl-md flex flex-col'>
            <div className="h-32 rounded-tl-md" style={{backgroundImage: `url(${bgImg})`, backgroundPosition: 'center'}}>
                <div className="py-5 pl-3 flex content-center gap-16 text-white font-bold [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">{props.name} <BsChevronDown size='1.5rem'/></div> 
            </div>
            <div className="mt-2">
                {props.channels.map(channel => (
                    <Channel key={channel.name} name={channel.name.toUpperCase()}/>
                ))}
            </div>
                
        </div>
    )
}

export default MainSidebar