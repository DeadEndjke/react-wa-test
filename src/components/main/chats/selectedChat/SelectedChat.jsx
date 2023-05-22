import { useEffect, useState } from 'react'
import s from './SelectedChat.module.scss'
import Message from './message/Message'
import axios from 'axios'

export default function SelectedChat({num, isSelected, ids, token}){
    const [message, setMessage] = useState("")
    const [id, setId] = useState(4)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        let url = `https://api.green-api.com/waInstance${ids}/ReceiveNotification/${token}`
        axios.get(url).then(({ data }) => {
            // setMessages((messages) => [...messages, data])
            setMessage(data)
            console.log(messages)
          });
    }, [messages])

    function addNewMessage(e){
        setId(id+1)
        setMessages((messages) => [...messages, e]);
    }
    return(
        <div className={s.selectedChat}>
            <div className={s.selectedNumber}>{num} </div> 
            <div className={s.chat}>
                {messages?.map((message) => (
                <Message key={message.id} message = {message.message} />
            )) }
            </div> 
            {isSelected ? 
            <form className={s.writeMessage} onSubmit={
                (e) => {
                    e.preventDefault()
                    addNewMessage({id: id, message: message})
                    }
                }>
                <input type="text" onChange={ e => setMessage(e.target.value)}/>
                <button type="submit">send</button>    
            </form>  
            : <></>}
        </div>
    )
}