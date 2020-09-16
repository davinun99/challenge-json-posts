import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, selectPost } from '../actions/PostAction';


const OnePost = ({post}) => {
    const {id, title, body} = post;
    const dispatch = useDispatch();
    const selectToModify = () => {
        dispatch(selectPost(post));
    }
    return(
        <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card h-100">
                <div className="card-header">
                    <div className="row align-items-center">
                        <span className="col-10">
                            {`Post ${id}`}
                        </span>    
                        <div className="">
                            <button onClick={()=>dispatch(deletePost(id)) } className="btn btn-danger">x</button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                    <button type='button' className="btn btn-info" data-toggle="modal" 
                        data-target="#editModal" onClick={selectToModify}
                    >
                        Editar
                    </button>
                </div>
            </div>
            
        </div>
    );
}
export default OnePost;