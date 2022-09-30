import React from 'react'
import "./Chat.css";
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from "react-router-dom";

function Chat({ name, message, profilePic, timeStamp}) {
    return (
        <Link to={`/chat/${name}`}>
            <div className = "chat">
                <PetsIcon className="chat__image" stc={profilePic} />
                <div className="chat__details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                    
                </div>
                <p className="chat__timestamp">{timeStamp}</p>
            </div>
        </Link>
    )
}

export default Chat;