import React from "react";
import Chat from "./Chat";
import ChatboxNavbar from "./ChatboxNavbar";
import RightSidebar from "./RightSidebar";

const Chatbox = (props) => {
    let server = props.server
    return (
        <div className="bg-[#35383E] w-full h-screen flex flex-col">
            <ChatboxNavbar name={server.name}/>
            <div className="flex h-full">
                <Chat />
                <RightSidebar />
            </div>
            
        </div>
    )
}

export default Chatbox