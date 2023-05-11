export const defaultState = {
  addedCards: [],
  orderHistory: [],
  MyAccount:[],
  MyProducts:[],
  UpdateProducts:[]
};
export const reducers = (prevState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...prevState,
        addedCards: action?.data,
      };
    case 'ORDER_HISTORY':
      return {
        ...prevState,
        orderHistory: action?.data,
      };
      case 'MY_ACCOUNT':
        return {
          ...prevState,
          MyAccount: action?.data,
        };
        case 'MY_PRODUCTS':
          return{
            ...prevState,
          MyProducts:action?.data,
          };
          case 'UPDATE_PRODUCTS':
          return{
            ...prevState,
          UpdateProducts:action?.data,
          }
      
  }
};
