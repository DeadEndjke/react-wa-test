import { useState } from 'react';
import s from './Form.module.scss'
import { Link } from "react-router-dom";

export default function Form({func}){
    const[id, setId] = useState("1101822599")
    const[token, setToken] = useState("906410c8228e4ec3b632debe7a461c541aaedded28464d3c88")
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

        <button className={s.btn} type="submit"> accept</button>
    </form>
    )
}