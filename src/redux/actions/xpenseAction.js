import { ADD_XPENSE } from "../constants"

export const addXpense = (data) => {
    return {
        type: ADD_XPENSE,
    data
    }
}