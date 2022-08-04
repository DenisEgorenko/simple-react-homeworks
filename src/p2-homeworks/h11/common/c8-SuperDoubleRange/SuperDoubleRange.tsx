import React from 'react'
import s from '../c7-SuperRange/SuperRange.module.css';
import {Box, Slider} from '@mui/material';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    const onChangeCallback = (event: Event, value: number | number[], activeThumb: number) => {
        onChangeRange && onChangeRange(typeof value === 'object' ? value : [])
        console.log(value)
    }


    return (
        <>
            <Box sx={{width: 250}}>
                <Slider
                    track={false}
                    value={value}
                    onChange={onChangeCallback}
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
