const action = {
  deleteItem: (i) => ({
    type: 'DELETE_ITEM',
    payload: {
      index: i,
    },
  }),
  addNewItem: (item) => ({
    type: 'ADD_NEW_ITEM',
    payload: {
      item,
    },
  }),
};

export default action;
