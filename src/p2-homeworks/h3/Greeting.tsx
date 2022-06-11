import React, {ChangeEvent, MouseEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (event: MouseEvent<HTMLButtonElement>) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    setErrorToNone: ()=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setErrorToNone}) => {

    const inputClass = error ? s.error + ' ' + s.input : s.input // need to fix with (?:)

    return (
        <div className={s.inputBlock}>
            <input onFocus={setErrorToNone} value={name} onChange={setNameCallback} className={inputClass}/>
            <button className={s.button} onClick={addUser}>add</button>
            <span className={s.counter}>{totalUsers}</span>
            <div className={s.errorMessage}>{error}</div>
        </div>
    )
}

export default Greeting
