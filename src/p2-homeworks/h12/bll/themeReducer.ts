
export type themeType = 'some' | 'red' | 'dark' | 'custom'

export type StateType = {
    theme: themeType
}

type ActionType = {
    type: 'CHANGE-THEME',
    payload: themeType
}

const initialState: StateType = {
    theme: 'some'
};

export const themeReducer = (state = initialState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.payload};
        }


        default: return state;
    }
};

export const changeThemeAC = (payload: themeType): ActionType => {
    return {type: 'CHANGE-THEME', payload: payload}
};