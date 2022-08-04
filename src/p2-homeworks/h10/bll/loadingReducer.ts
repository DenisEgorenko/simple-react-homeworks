export type initialStateType = {
    value: boolean
}
const initState: initialStateType = {
    value: false
}

type switchLoaderActionType = {
    type: 'SWITCH-LOADER',
    value: boolean
}

type ActionType = switchLoaderActionType

export const loadingReducer = (state = initState, action: ActionType): initialStateType => { // fix any
    switch (action.type) {
        case 'SWITCH-LOADER': {
            return {...state, value: action.value}
        }

        default:
            return state
    }
}

export const switchLoaderAC = (value: boolean): switchLoaderActionType => {
    return {type: 'SWITCH-LOADER', value: value}
}
