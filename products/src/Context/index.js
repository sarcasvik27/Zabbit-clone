import React, { useReducer, createContext, useMemo } from 'react'
import { AppActions } from './Actions';
import { reducers } from './Reducers';
import { defaultState } from './Reducers';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(reducers, defaultState);
    const actions = useMemo(() => AppActions(dispatch), []);
    return <GlobalContext.Provider value={{state, actions}}>
        {props.children}
    </GlobalContext.Provider>
}