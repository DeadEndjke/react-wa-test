import { useState } from 'react'
import s from './Modal.module.scss'

export default function Modal({active, setActive, addNewChat, id}){
    const[number, setNumber] = useState("")
    
    return(
        <div className={active ? s.newChatActive : s.newChat} onClick={() => setActive(false)}>
            <form 
            onSubmit={
                (e) => {
                    e.preventDefault()
                    addNewChat({id:id, num:number})
                    setActive(false)
                }
            } 
            className={s.formContent} action="" onClick={e => e.stopPropagation()}>
                <label htmlFor=""></label>
                <input type="text"  value = {number} onChange={ e => setNumber(e.target.value)} />
                <button type="submit">add</button>
            </form>
        </div>
    )
}
