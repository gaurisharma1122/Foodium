export const reducer= (state, action)=>{
    switch(action.type){
        case 'SET_ACTIVE_NAVLINK':
            {
                return { ...state, activeNavLink: action.payload };
            };
            break;
        case 'SET_CATEGORIES':
            {
                return { ...state, categories: action.payload };
            }
            break;
        case 'ADD_TO_FAVOURITES':
            {
                return { ...state, favourites: [ ...state.favourites, action.payload ] };
            }
            break;
        case 'DELETE_FROM_FAVOURITES':
            {
                return { ...state, favourites: state.favourites.filter((item)=> item.id !== action.payload) };
            }
            break;
    }
}