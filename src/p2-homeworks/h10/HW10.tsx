import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {initialStateType, switchLoaderAC} from './bll/loadingReducer';

function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.value)

    const [value, setValue] = useState(3)

    const setLoading = () => {
        dispatch(switchLoaderAC(true))

        setTimeout(() => {
            setValue(2)
            console.log('2')
        }, 1000)

        setTimeout(() => {
            setValue(1)
            console.log('1')
        }, 2000)

        setTimeout(() => {
            dispatch(switchLoaderAC(false))
            setValue(3)
            console.log('0')
        }, 3000)

        console.log('loading...')
        console.log('3')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>{value}</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
