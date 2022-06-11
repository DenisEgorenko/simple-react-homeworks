import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v4} from 'uuid'


// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        let newNameArray = [...users, {_id: v4(), name: name}]
        setUsers(newNameArray) // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            {users.map(user => <div>{user.name}  ${user._id}</div>)}

            <hr/>
        </div>
    )
}

export default HW3
