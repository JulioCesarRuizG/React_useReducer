export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      console.log(action.payload);
      return [
        ...state.filter(function (element) {
          return element.id !== action.payload.id;
        }, action.payload.id),
      ];
    case "toggle":
      return [
        ...state.filter(function (element) {
          if (element.id === action.payload.id) {
            element.done = action.payload.done;
          }
          return element;
        }, action.payload),
      ];
    default:
      return state;
  }
};
