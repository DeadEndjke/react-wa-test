import { useEffect, useState } from 'react'
import s from './SelectedChat.module.scss'
import Message from './message/Message'
import axios from 'axios'

export default function SelectedChat({num, ids, token, messageData, setMessageData}){
    const [message, setMessage] = useState("")
    const [receiptId, setReceiptId] = useState("")
    const [messageObj, setMessageObj] = useState()


    function getMessage(){
        let url = `https://api.green-api.com/waInstance${ids}/ReceiveNotification/${token}`
        axios.get(url).then(({ data }) => {
            
            if(data !== null){
                setMessageObj(data)
                setReceiptId(data?.receiptId)
            }else{
                setReceiptId("")
            }
           }
        ).catch(err => console.log(err));
    }
 
    function deleteMessage(){
            let url = `https://api.green-api.com/waInstance${ids}/DeleteNotification/${token}/${receiptId}`
            if(receiptId !== ""){
                axios.delete(url).then(res => {
                    if(res.data.result 
                        && (messageObj.body.typeWebhook === 'outgoingAPIMessageReceived' || messageObj.body.typeWebhook === 'incomingMessageReceived')
                        && (messageObj.body.messageData.typeMessage === 'textMessage' || messageObj.body.messageData.typeMessage === 'extendedTextMessage')
                        && (messageObj.body.senderData.chatId === `${num}@c.us` || messageObj.body.instanceData.idInstance === `${ids}`)
                        ){
                        setMessageData((messageData) => [...messageData, messageObj]);
                        
                    }
                }).catch(err => console.log(err))
                
            }
        
        
    }



    function sendMessage(){
        let url = `https://api.green-api.com/waInstance${ids}/SendMessage/${token}`
        axios.post(url, {
            "chatId": `${num}@c.us`,
            "message": message
        }).catch(err => console.log(err))

    
    }



    useEffect(() => {
        getMessage()
        deleteMessage()
    });

    return(
        <div className={s.selectedChat}>
            <div className={s.selectedNumber}>{num}</div> 
            <div className={s.chat}>
                {messageData?.map((message) => (
                <Message key={message.receiptId} data= {message.body} messageData = {message.body.messageData} type = {message.body.typeWebhook}/>
            )) }
            </div> 
            
            <form className={s.writeMessage} onSubmit={
                (e) => {
                    e.preventDefault()
                    sendMessage()
                    setMessage("")
                    }
                }>
                <input type="text" value = {message} onChange={ e => setMessage(e.target.value)}/>
                <button type="submit">send</button>    
            </form>  
            
        </div>
    )
}