import React from "react";
import MainSidebar from "./MainSidebar";
import Chatbox from './Chatbox'

const Main = () => {
    return (
        <div className="flex w-full h-full">
            <MainSidebar/>
            <Chatbox/>
        </div>
    )
}

export default Main