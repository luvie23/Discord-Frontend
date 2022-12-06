import {React, useState}  from "react";
import Server from "./Server";
import servers from "./servers";

import discordlogo from '../assets/discordlogo.png'


let serverList = servers


const Sidebar = () => {
    const [selectedServer, setSelectedServer] = useState(serverList[0])
    console.log(selectedServer)

    return (
        <div className='h-full w-20 bg-[#202226] flex flex-col justify-start items-center'>
            <img className="w-10 py-5 border-b-2 border-[#2C2D31]" src={discordlogo}/>
            {serverList.map(server => (
                <Server key={server.id}serverImage={server.image} name={server.name}/>
            ))}
            
        </div>
    )
}

export default {Sidebar}