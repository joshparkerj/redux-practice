export const deleteItem = i => {
  return {
    type: "DELETE_ITEM",
    payload: {
      index: i
    }
  }
}

export const addNewItem = item => {
  return {
    type: "ADD_NEW_ITEM",
    payload: {
      item: item
    }
  }
}