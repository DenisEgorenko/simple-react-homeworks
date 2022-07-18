import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<string>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        window.clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
            var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
            setDate(localISOTime)
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }


    const stringTime = date ? date.split('T')[1].slice(0, 8) : ''
    const stringDate = date
        ? date.split('T')[0].slice(8, 10)
        + '.' + date.split('T')[0].slice(5, 7)
        + '.' + date.split('T')[0].slice(0, 4)
        : ''

    return (
        <div>
            <div style={{height: '60px', width: '200px'}}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    style={{margin: '10px 0 10px 0'}}
                >
                    {stringTime}
                </div>

                {show && (
                    <div style={{margin: '10px 0 10px 0'}}>
                        {stringDate}
                    </div>
                )}</div>

            <SuperButton style={{marginRight: '10px'}} onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
