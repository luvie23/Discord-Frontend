import {React, useState}  from "react";
import Server from "./Server";
import servers from "./servers";
import {BsPlus} from "react-icons/bs"
import discordlogo from '../assets/discordlogo.png'





const Sidebar = (props) => {
    let serverList = props.servers
    return (
        <div className='h-full w-20 bg-[#202226] flex flex-col justify-start items-center'>
            <img className="w-10 py-5 border-b-2 border-[#2C2D31]" src={discordlogo}/>
            {serverList.map((server, index) => (
                <Server key={server.id}serverImage={server.image} name={server.name} handleClick={() => {props.handleClick(index)}}/>
            ))}
            <div>
                <BsPlus  color="#59B287" className="bg-[#2E3235] rounded-full h-10 w-10 hover:cursor-pointer"/>
            </div>
        </div>
    )
}

export default Sidebar