import React from 'react'
import {AffairType} from './HW2';
import styles from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix


    return (
        <div className={styles.item}>
            <div className={styles.name}>
                {props.affair.name}
            </div>
            <div className={styles.priority +" "+ styles[props.affair.priority]}>
                {props.affair.priority}
            </div>

            <button className={styles.deleteButton} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
