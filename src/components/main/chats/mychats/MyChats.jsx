import { useState } from 'react'
import s from './MyChats.module.scss'
import Chat from './chat/Chat'
import Modal from './modal/Modal'

export default function MyChats({setNum, setIsSelected, setMessageData}){
    const [chats, setChats] = useState([])
    const[id, setId] = useState(0)

    

    function addNewNumber(e){
        setId(id+1)
        setChats((chats) => [...chats, e]);
    }

    const[modalActive, setModalActive] = useState(false)

    return(
        <div className={s.myChats}>
            {chats?.map((chat) => (
                <Chat key={chat.id} num = {chat.num} setNum ={setNum} setIsSelected = {setIsSelected} setMessageData ={setMessageData}/>
            )) }
            
            <Modal active={modalActive} setActive={setModalActive}
             addNewChat = {addNewNumber}
             id = {id}
             />
            <button className = {s.btn} onClick={() => setModalActive(true)} >add new chat</button>
        </div>
    )
}