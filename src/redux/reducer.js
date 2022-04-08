const initState = {
  list: [],
};

// eslint-disable-next-line default-param-last
const reducer = (state = initState, actions) => {
  switch (actions.type) {
    case 'ADD_NEW_ITEM':
      return {
        ...state,
        list: [...state.list, actions.payload.item],
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        list: state.list.filter((_, i) => i !== actions.payload.index),
      };
    default:
      return state;
  }
};

export default reducer;
