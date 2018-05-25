let initial_state = {
    id: '',
    username: '',
    firstname: ''
}

//action types
const USER = 'USER';
const INPUT = 'INPUT';

export default function reducer(state = initial_state, action){
    switch(action.type){
        case USER:
            return Object.assign({}, state, {id: action.payload.id, username: action.payload.username, firstname: action.payload.firstname});
        case INPUT:
            return Object.assign({}, state, {username: action.payload})
        default:
            return state;
    }
}

// action creators
export function getUser(value){
    return{
        type: USER,
        payload: value
    }
}

// export function input(value){
//     return{
//         type: INPUT,
//         payload: value
//     }
// }