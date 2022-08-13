import React from 'react';
import s from './HW12.module.css';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatchType, AppStoreType} from '../h10/bll/store';
import {changeThemeAC, StateType, themeType} from './bll/themeReducer';

const themes: themeType[] = ['dark', 'red', 'some', 'custom'];

function HW12() {
    // const theme = 'some'; // useSelector

    const theme = useSelector<AppStoreType, string>(store => store.themeReducer.theme)
    const dispatch = useDispatch<AppDispatchType>()

    const onChangeHandler = (value: string) => {
        if (value === 'some' || value === 'red' || value === 'dark' || value === 'custom') {
            dispatch(changeThemeAC(value))
        }
    }

    return (
        <div className={`${s[theme]} + ${s.blockStyle}`}>
            <hr/>
            <span className={`${s[theme + '-text']} + ${s.title}`}>
                homeworks 12
            </span>

            {/*<SuperSelect/>*/}
            <SuperRadio onChangeOption={onChangeHandler} value={theme} options={themes}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
