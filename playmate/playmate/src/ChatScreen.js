import React , {  useState }from 'react'
import PersonIcon from '@mui/icons-material/Person';
import './ChatScreen.css';


function ChatScreen() {
    const[input, setInput] = useState('');
   const [messages, setMessages] = useState([
    {
       name: 'Sam',
       image: '...',
       message: 'cute doggo 🐶' 

    },
    {
        name: 'Sam',
        image: '...',
        message: 'Can we set a play date' 
 
     },
     {
        name: 'Sam',
        image: '...',
        message: 'Would you be interested in investing in my start up' 
 
     },
     {
        name: 'Sam',
        image: '...',
        message: 'HELLLLLLO?' 
 
     }
   ]);

   const handleSend = e => {
    e.preventDefault();

    setMessages([...messages, { message: input}]);
    setInput("");
   }
    
   return (
        <div className="chatScreen">
            <p className="chatScreen__timeStamp">YOU MATCHED WITH SAM ON 18/11/22 🥳</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                    <PersonIcon 
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatSceen__textUser">{message.message}</p>
                    </div>
                )
                
            ))}
            
                <form className="chatScreen__input">
                    <input 
                        value = {input}
                        onChange={(e) => setInput(e.target.value)}    
                        className="chatScreen__inputField"
                        placeholders="Type a message..."
                        type="text" 
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>

            
        
        </div>
        
        
    );
}

export default ChatScreen