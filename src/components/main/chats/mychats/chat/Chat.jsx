import s from './Chat.module.scss'

export default function Chat({num, setNum, setIsSelected, setMessageData}){
    return(
        <button onClick={() => {
            setNum(num) 
            setIsSelected(true)
            setMessageData([])
        }} className={s.chat}>
            <div className={s.num}>{num}</div>
        </button>
    )
}