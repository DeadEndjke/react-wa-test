import { useState } from 'react'
import s from './Chats.module.scss'
import MyChats from './mychats/MyChats'
import SelectedChat from './selectedChat/SelectedChat'

export function Chats({person}){
    const[num, setNum] = useState()
    const[isSelected, setIsSelected] = useState(false)
    const[messageData, setMessageData] = useState([])

    
    return(
        <div className={s.chatPage}>
            <MyChats setNum = {setNum} setIsSelected ={setIsSelected} setMessageData = {setMessageData}/>
            {isSelected ? <SelectedChat num = {num} isSelected = {isSelected} ids = {person.id} token = {person.token} messageData={messageData} setMessageData = {setMessageData}/>: <></>}
            
        </div>
    )
}