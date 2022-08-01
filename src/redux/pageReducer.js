export const CHANGE_PAGE = "CHANGE_PAGE";
const initialState={
    page:1
}
export function pageReducer(state=initialState, action){
    switch(action.type){
        case CHANGE_PAGE:{
            return {...state, page:state.page+1 }
        }
        default:{
            return state;
        }
    }
}