import { ADD_XPENSE } from "../constants";

const initialState = {
    xpenseList: []
}

export const xpenseReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_XPENSE:
            return {
                ...state,
                xpenseList: [...state.xpenseList, action.data]
            }
        default:
            return state;
    }
}