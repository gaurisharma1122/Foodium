import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

export const AppContext= createContext();

const initialState= {
    activeNavLink: 1,
    categories: []
}

const AppProvider= ({ children })=>{

    const setActiveNavlink= (id)=>{
        dispatch({ type: 'SET_ACTIVE_NAVLINK', payload: id });
    };

    const fetchCategories= ()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response=> response.json())
        .then(respData=>{
            dispatch({ type: 'SET_CATEGORIES', payload: respData.categories });
        });
    };

    const [state, dispatch]= useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch, setActiveNavlink, fetchCategories }}>
            { children }
        </AppContext.Provider>
    );
};

export default AppProvider;

export const useGlobalContext= ()=>{
    return useContext(AppContext);
}