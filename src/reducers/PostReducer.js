import {
    CREATE_POST,
    DELETE_POST,
    GET_POSTS,
    MODIFY_POST,
    SELECT_POST,
} from '../types';

const initialState = {
    posts : [],
    selectedPost: null
};
export default function( state = initialState, action ){
    switch ( action.type ) {
        case GET_POSTS:
            return{
                ...state,
                posts: action.payload,
            };
        default:
            return state;
        case DELETE_POST:
            return{
                ...state,
                posts: state.posts.filter( post => post.id !== action.payload)
            }
        case CREATE_POST:
            return{
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case SELECT_POST:
            return{
                ...state,
                selectedPost: action.payload
            }
        case MODIFY_POST:
            
            return{
                ...state,
                posts: state.posts.map( post =>
                    (post.id === action.payload.id ? post = action.payload : post)
                )
            }
    }
}

