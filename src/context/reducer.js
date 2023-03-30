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
    }
}