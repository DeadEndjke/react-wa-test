import { useEffect, useState } from 'react'
import s from './MyChats.module.scss'
import Chat from './chat/Chat'
import Modal from './modal/Modal'

export default function MyChats({setNum, setIsSelected}){
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
                <Chat key={chat.id} num = {chat.num} setNum ={setNum} setIsSelected = {setIsSelected}/>
            )) }
            
            <Modal active={modalActive} setActive={setModalActive}
             addNewChat = {addNewNumber}
             id = {id}
             />
            <button onClick={() => setModalActive(true)} >add new chat</button>
        </div>
    )
}