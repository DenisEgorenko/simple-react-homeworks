import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: string
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div >

            {mappedAffairs}

            <div className={styles.buttonBlock}>
                <button className={props.filter === 'all' ? styles.active : ''} onClick={setAll}>All</button>
                <button className={props.filter === 'high' ? styles.active : ''} onClick={setHigh}>High</button>
                <button className={props.filter === 'middle' ? styles.active : ''} onClick={setMiddle}>Middle</button>
                <button className={props.filter === 'low' ? styles.active : ''} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
