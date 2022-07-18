import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number,
    name: string,
    age: number
}

export type UserStateType = Array<UserType>

const initialPeople: UserStateType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserStateType>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{width: '130px'}}>
                {p.name}
            </div>
            <div>
                {p.age}
            </div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            <div style={{margin: '20px 0 20px 0'}}>
                {finalPeople}
            </div>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div><SuperButton style={{marginRight: '10px'}} onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton style={{marginRight: '10px'}} onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={checkAge}>check 18</SuperButton></div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
