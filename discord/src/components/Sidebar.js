import React from "react";
import Server from "./Server";

import discordlogo from '../assets/discordlogo.png'
import coolServerImage from '../assets/serverphotos/coolserver.jpg'

let servers = [
    {
        name: 'Cool Server',
        image: coolServerImage
    }
]


const Sidebar = () => {


    return (
        <div className='h-full w-20 bg-[#202226] flex flex-col justify-start items-center'>
            <img className="w-10 py-5 border-b-2 border-[#2C2D31]" src={discordlogo}/>
            {servers.map(server => (
                <Server serverImage={server.image} name={server.name}/>
            ))}
            
        </div>
    )
}

export default Sidebar