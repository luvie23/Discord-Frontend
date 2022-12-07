import React from "react";
import { BsHash, BsFillBellFill, BsFillPinAngleFill, BsFillPeopleFill, BsDownload, BsAt, BsFillQuestionCircleFill } from "react-icons/bs"

const ChatboxNavbar = (props) => {
    return (
        <div className="h-10 bg-[#363A3F] text-[#F4F8F8] flex items-center justify-between z-10 shadow-lg">
            <div className='flex items-center '><BsHash size='2rem' className="mx-2 text-[#868A8F]"/>{props.name}</div>
            <div className="flex items-center gap-3 mr-5 text-[#B8BCBF]">
                <BsFillBellFill/>
                <BsFillPinAngleFill/>
                <BsFillPeopleFill/>
                <input className="bg-[#202226] w-32 pl-2 text-[#5A5C60]" defaultValue='Search'></input>
                <BsDownload size='1.3rem' color="#59B287"/>
                <BsAt size='1.3rem'/>
                <BsFillQuestionCircleFill size='1.2rem'/>
            </div>
        </div>
    )
}

export default ChatboxNavbar

