const initState = {
  list: []
}

const reducer = (state=initState, actions) => {
  switch(actions.type){
    case "ADD_NEW_ITEM":
      return {
        ...state,
        list: [...state.list,actions.payload.item]
      }
    case "DELETE_ITEM":
      const listCopy = [...state.list];
      listCopy.splice(actions.payload.index,1);
      return {
        ...state,
        list: listCopy
      }
    default:
      return state;
  }
}

export default reducer;
