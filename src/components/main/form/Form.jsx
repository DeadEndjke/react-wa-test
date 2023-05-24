import { useState } from 'react';
import s from './Form.module.scss'

export default function Form({func, err}){
    const[id, setId] = useState("")
    const[token, setToken] = useState("")
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
