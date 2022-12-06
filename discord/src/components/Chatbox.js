import React from "react";
import Chat from "./Chat";
import ChatboxNavbar from "./ChatboxNavbar";
import RightSidebar from "./RightSidebar";

const Chatbox = () => {
    return (
        <div className="bg-[#35383E] w-full">
            <ChatboxNavbar />
            <div className="flex">
                <Chat />
                <RightSidebar />
            </div>
            
        </div>
    )
}

export default Chatbox