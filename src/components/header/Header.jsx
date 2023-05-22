import s from './Header.module.scss'
export default function Header(){
    return(
        <header className={s.header}>
            <div className={s.headerContent}></div>
        </header>
    )
}