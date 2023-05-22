import s from './Message.module.scss'

export default function Message({id, message}){


    return(
        <div className={s.message}>{message}</div>
    )
}