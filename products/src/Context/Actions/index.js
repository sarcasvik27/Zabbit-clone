export const AppActions = dispatch => ({
    AddcardAction: async data => {
        dispatch({ type: 'ADD_CARD', data });
    },
    OrderHistory: async data => {
        dispatch({ type: 'ORDER_HISTORY', data });
    },
    MyAccount: async data => {
        dispatch({ type: 'MY_ACCOUNT', data });
    },
    Products: async data => {
        dispatch({ type: 'MY_PRODUCTS', data });
    },
    UpdateProducts: async data => {
        dispatch({ type: 'UPDATE_PRODUCTS', data });
    },
   
});