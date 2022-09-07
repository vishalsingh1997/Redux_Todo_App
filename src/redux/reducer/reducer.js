const initial_state = {
  User_data: [],
};

export const todoReducers = (state = initial_state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        User_data: [...state.User_data, action.payload],
      };

    case "REMOVE_DATA":
      const deleteData = state.User_data.filter(
        (ele, k) => k !== action.payload
      );
      return {
        ...state,
        User_data: deleteData,
      };

    case "UPDATE_DATA" :
        const updateData = state.User_data.map((ele, k)=> k == action.itemsId ? action.payload : ele)
        return {
            ...state,
            User_data: updateData,
          };

    default:
      return state;
  }
};
