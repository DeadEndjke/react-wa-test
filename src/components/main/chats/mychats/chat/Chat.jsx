import s from './Chat.module.scss'

export default function Chat({id, num, setNum, setIsSelected}){
    return(
        <button onClick={() => {
            setNum(num) 
            setIsSelected(true)
            }
            } className={s.chat}>
            <div className={s.num}>{num}</div>
        </button>
    )
}