export const GET_CATEGORIES = "GET_CATEGORIES";
export const VOID_STATE = "VOID_STATE";
function categoriesReducer(state=[], action){
    switch(action.type){
        case GET_CATEGORIES:{
          return [...state, ...action.payload]
        }
        case VOID_STATE :{
            state.length=0;
            return state;
        }
        default:{
            return state;
        }
    }
}

export default categoriesReducer;
export  const getCategories = (payload)=>({type:GET_CATEGORIES, payload})