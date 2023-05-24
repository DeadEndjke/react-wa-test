import { useState } from 'react';
import s from './Form.module.scss'

export default function Form({func, err}){
    const[id, setId] = useState("1101822604")
    const[token, setToken] = useState("83f73891b7f245499a95f74b8e46bcc59cb71113366e4a9a97")
    return(
    <form className={s.form} onSubmit={
        (e) => {
            e.preventDefault()
            func(id, token)
        }
       }>
        <label >idInstance</label>
        <input type="text" value={id} onChange={ e => setId(e.target.value)}/>

        <label >apiTokenInstance</label>
        <input type="text" value={token} onChange={ e => setToken(e.target.value)}/>
        {err ? <div className = {s.error}>login error</div>:<></>}
        <button className={s.btn} type="submit"> accept</button>
    </form>
    )
}