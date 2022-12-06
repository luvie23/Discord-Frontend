import React from "react";
import discordlogo from '../assets/discordlogo.png'



const Sidebar = () => {


    return (
        <div className='h-full w-20 bg-[#202226] flex flex-col justify-start items-center'>
            <img className="w-10 py-5 border-b-2 border-[#2C2D31]" src={discordlogo}/>
            
        </div>
    )
}

export default Sidebar