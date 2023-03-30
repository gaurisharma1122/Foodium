import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

export const AppContext= createContext();

const initialState= {
    activeNavLink: 1,
}

const AppProvider= ({ children })=>{

    const setActiveNavlink= (id)=>{
        dispatch({ type: 'SET_ACTIVE_NAVLINK', payload: id });
    }

    const [state, dispatch]= useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch, setActiveNavlink }}>
            { children }
        </AppContext.Provider>
    );
};

export default AppProvider;

export const useGlobalContext= ()=>{
    return useContext(AppContext);
}