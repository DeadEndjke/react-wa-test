import { useState } from 'react'
import s from './Main.module.scss'
import Form from './form/Form'
import { Chats } from './chats/Chats'
import axios from "axios"





export default function Main(){
    const [isAuth, setIsAuth] = useState(false) 
    const [person, setPerson] = useState({})
    //id:'', token:''

    function isAuthorized(id, token){
        
        let url = `https://api.green-api.com/waInstance${id}/getStateInstance/${token}`
        axios.get(url).then(({ data }) => {
           if(data.stateInstance == 'authorized'){
            setPerson({id:id, token:token})
            setIsAuth(1)
           }else{
            setIsAuth(0)
           }
          });
    }

 
        

   
    {
        if (!isAuth){
            return(
                <div className = {s.main}>
                    <Form func = {isAuthorized}/>
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