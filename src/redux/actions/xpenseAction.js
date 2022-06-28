import { ADD_XPENSE, DELETE_XPENSE, SEARCH_XPENSE } from "../constants";

export const addXpense = (data) => {
  return {
    type: ADD_XPENSE,
    data,
  }
}

export const deleteXpense = (data) => {
  return {
    type: DELETE_XPENSE,
    data,
  }
}

export const searchXpense = (search) => {
  return {
    type: SEARCH_XPENSE,
    search,
  }
}