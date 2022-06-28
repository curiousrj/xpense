import { ADD_XPENSE, DELETE_XPENSE, XPENSE_LIST, SEARCH_XPENSE } from "../constants";

const defineList = () => {
    const list = localStorage.getItem(XPENSE_LIST);
    let xpenses = [];
    if(list) {
        xpenses = JSON.parse(list);
    }
    return xpenses
}

const initialState = {
  xpenseList: defineList(),
  query: "",
};

export const xpenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_XPENSE:
        const xpenseList = [...state.xpenseList, action.data];
        localStorage.setItem(XPENSE_LIST, JSON.stringify(xpenseList));
      return {
        ...state,
        xpenseList,
      };
    case DELETE_XPENSE:
      const { data } = action;
      const updatedList = state.xpenseList.filter(
        (item) => item.creationTime !== data.creationTime
      );
      localStorage.setItem(XPENSE_LIST, JSON.stringify(updatedList));
      return {
        ...state,
        xpenseList: updatedList,
      };
    case SEARCH_XPENSE:
      return {
        ...state,
        query: action.search
      };

    default:
      return state;
  }
};
