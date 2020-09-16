import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { modifyPost } from '../actions/PostAction';

const EditModal = () => {
    const dispatch = useDispatch();
    const selectedPost = useSelector(state => state.posts.selectedPost);
    const [newPost, setNewPost] = useState(selectedPost);
    const handleChange = (e) => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        });
    }
    useEffect(()=>{
        
        setNewPost(selectedPost);
        // eslint-disable-next-line
    },[selectedPost]);
    return (
        <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form>
                        <div className="modal-body">
                            
                                <div className="form-group">
                                    <label htmlFor="title">Titulo</label>
                                    <input onChange={handleChange} type="text" className="form-control" value={newPost && newPost.title ? newPost.title : ''} name="title" id="title" aria-describedby="emailHelp"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="body">Texto</label>
                                    <textarea className="form-control" onChange={handleChange} name='body' value={newPost && newPost.body ? newPost.body : ''} id="body" rows="3"></textarea>
                                </div>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={()=>dispatch(modifyPost(newPost))} data-dismiss="modal">Guardar Nuevo</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditModal
