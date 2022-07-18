import {UserStateType} from "../HW8";

type sortType = 'up' | 'down'

type sortActionType = {
    type: 'sort',
    payload: sortType
}

type checkActionType = {
    type: 'check',
    payload: Number
}

type actionType = sortActionType | checkActionType

export const homeWorkReducer = (state: UserStateType, action: actionType): UserStateType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const copyState = [...state]

            if (action.payload === 'up') {
                copyState.sort((a, b) => {
                    if (a.name > b.name) return 1
                    else if (a.name < b.name) return -1
                    else return 0
                })
            }

            if (action.payload === 'down') {
                copyState.sort((a, b) => {
                    if (a.name < b.name) return 1
                    else if (a.name > b.name) return -1
                    else return 0
                })
            }

            return copyState
        }


        case 'check': {
            const copyState = state.filter(u => u.age > action.payload)
            return copyState
        }
        default:
            return state
    }
}