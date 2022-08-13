import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {RequestAPI} from './RequestAPI';

type RequestProps = {}

function Request(props: RequestProps) {

    const [checked, setChecked] = useState<boolean>(false)
    const [response, setResponse] = useState<string>('')

    const requestHandler = () => {
        RequestAPI.postRequest(checked)
            .then(res => {
                console.log({...res})
                setResponse(`${res.data.errorText}, ${res.data.info}`)
            })
            .catch(error => {
                console.log({...error})
                setResponse(`${error.response.data.errorText}, ${error.response.data.info}`)
            })
    }

    return (
        <div>
            <div style={{marginTop: '10px'}}>
                <SuperCheckbox checked={checked} onChangeChecked={setChecked}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <SuperButton onClick={requestHandler}>Запрос</SuperButton>
            </div>
            <div style={{marginTop: '10px'}}>
                Ответ от сервера: {response}
            </div>
        </div>
    )
}

export default Request