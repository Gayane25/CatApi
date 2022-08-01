export const GET_DATA = " GET_DATA ";
export const VOID_DATA = " VOID_DATA";

export function dataReducer(state=[], action){
    switch(action.type){
        case  GET_DATA:{
          return [...state, ...action.payload]
        }
        case VOID_DATA:{
             state.length=0;
             return state;
        }
        default:{
            return state;
        }
    }
}

export const getData = (payload)=>({type:GET_DATA, payload})