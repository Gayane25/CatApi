export const OPEN_CATEGORIES = "OPEN_CATEGORIES";
const initialState = {
    isOpen:false
}
export function toggleModalReducer(state=initialState, action){
    switch(action.type){
        case OPEN_CATEGORIES:{
            return {...state, isOpen:!state.isOpen}
        }
        default:{
            return state
        }
       
    } 
    
}
