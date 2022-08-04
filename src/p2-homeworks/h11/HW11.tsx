import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number[]>([0, 50])


    const changeValue1 = (num: number) => {
        setValue1(num)
        setValue2([num, value2[1]])
    }

    const changeValue2 = (num: number[]) => {
        setValue1(num[0])
        setValue2([value1, num[1]])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{margin: '10px'}}>{value2[0]}</div>
                <SuperRange
                    value={value1}
                    onChangeRange={changeValue1}
                />
            </div>

            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{margin: '10px'}}>{value2[0] < value2[1] ? value2[0] : value2[1]}</div>
                <SuperDoubleRange
                    value={value2}
                    onChangeRange={changeValue2}
                />
                <div style={{margin: '10px'}}>{value2[0] < value2[1] ? value2[1] : value2[0]}</div>
            </div>

        </div>
    )
}

export default HW11
