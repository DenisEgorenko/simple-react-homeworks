import React from 'react'
import s from './App.module.css'
import HW4 from '../../../p2-homeworks/h4/HW4';
import HW5 from '../../../p2-homeworks/h5-rrd-v6/HW5';

function App() {
    return (
        <div className={s.App}>
            <span style={{marginLeft: '10px'}}>react homeworks:</span>

            <div className={s.Messages}>
                <HW5/>
            </div>


        </div>
    )
}

export default App
