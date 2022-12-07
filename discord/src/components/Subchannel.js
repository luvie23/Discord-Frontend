import React from "react";
import { BsHash } from "react-icons/bs"

const Subchannel = (props) => {
    return (
        <div className="flex items-center ml-5 text-[#868A8F]">
            <BsHash size='1.7rem' className="mr-2"/> {props.name.toLowerCase()}
        </div>
    )
}

export default Subchannel