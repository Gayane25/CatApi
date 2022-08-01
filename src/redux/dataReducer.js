export const GET_DATA = " GET_DATA ";

export function dataReducer(state=[], action){
    switch(action.type){
        case  GET_DATA:{
            return [...state, ...action.payload]
        }
        default:{
            return state;
        }
    }
}

export const getData = (payload)=>({type:GET_DATA, payload})