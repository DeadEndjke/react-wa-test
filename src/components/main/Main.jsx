import { useState } from 'react'
import s from './Main.module.scss'
import Form from './form/Form'
import { Chats } from './chats/Chats'
import axios from "axios"





export default function Main(){
    const [isAuth, setIsAuth] = useState(false) 
    const [person, setPerson] = useState({})
    const [err, setErr] = useState(false)

    function isAuthorized(id, token){
        
        let url = `https://api.green-api.com/waInstance${id}/getStateInstance/${token}`
        axios.get(url).then(({ data }) => {
           if(data.stateInstance == 'authorized'){
            setPerson({id:id, token:token})
            setIsAuth(1)
           }else{
            setIsAuth(0)
           }
          }).catch(err => setErr(true));
    }
   
    {
        if (!isAuth){
            return(
                <div className = {s.main}>
                    <Form func = {isAuthorized} err ={err}/>
                </div>
            )
        }else{
            return(
                <div className = {s.main}>
                    <Chats person = {person}/>
                </div>
            )
        }
    }
    
}