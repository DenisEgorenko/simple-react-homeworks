import React from 'react'
import styles from "./Message.module.css"


type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}



function Message(props: MessagePropsType) {
    return (
        <div className={styles.messageBlock}>
            <div className={styles.avatar}>
                <img src={props.avatar}/>
            </div>
            {/*<div className={styles.message}>*/}
            {/*    Message*/}
            {/*</div>*/}



            <div className={styles.message}>

                <div className={styles.sideFigure}>
                    <div className={styles.sideBottomPeace}>
                        <div className={styles.sideCircle}></div>
                        <div className={styles.sidePeace}></div>
                    </div>
                </div>

                <div className={styles.messageBody}>
                    <div className={styles.messageBodyName}>
                        {props.name}
                    </div>
                    <div className={styles.messageBodyMessage}>
                        {props.message}
                    </div>
                    <div className={styles.messageBodyTime}>
                        {props.time}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Message
