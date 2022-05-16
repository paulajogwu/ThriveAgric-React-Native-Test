import {} from './actions'


const  defaultState={
    users: [],
}

export default function SearchPageReduce(state = defaultState, action){
    switch(action.type){
        case ActionTypes.SET_USERS:
            return {...state, users: action.payload}
        default:
            return state;
    }
}