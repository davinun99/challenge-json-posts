import { 
    DELETE_POST, 
    GET_POSTS, 
    GET_POSTS_ERROR,
    CREATE_POST, 
    MODIFY_POST, SELECT_POST
} from '../types';
import AxiosInstance from '../config/AxiosInstance';
export function getPosts(){
    return async( dispatch ) => {
        try {
            const axiosReq = await AxiosInstance.get('/posts');
            dispatch({
                type: GET_POSTS,
                payload: axiosReq.data,
            });
        } catch (error) {
            dispatch({
                type: GET_POSTS_ERROR,
            });
            console.error(error);
        }
    }
}
export function deletePost(id){
    return async dispatch => {
        try {
            await AxiosInstance.delete(`/posts/${id}`);
            dispatch({
                type: DELETE_POST,
                payload: id,
            });
        } catch (error) {
            console.error(error);
        }
    }
}
export function createNewPost(postObj) {
    return async dispatch => {
        let newPost = {...postObj, userId:1}
        try {
            const axiosReq = await AxiosInstance.post(`/posts`, newPost);
            dispatch({
                type: CREATE_POST,
                payload: axiosReq.data,
            });
        } catch (error) {
            console.error(error);
        }
    }
}
export function selectPost(postObj) {
    return async dispatch => {
        dispatch({
            type: SELECT_POST,
            payload: postObj,
        });
    }
}
export function modifyPost(postObj) {
    return async dispatch => {
        try {
            const axiosReq = await AxiosInstance.put(`/posts/${postObj.id}`, postObj);
            dispatch({
                type: MODIFY_POST,
                payload: axiosReq.data,
            });
        } catch (error) {
            console.error(error);
        }
    }
}