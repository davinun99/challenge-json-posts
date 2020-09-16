import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewPost } from '../actions/PostAction';

const Header = () => {
    const [newPost, setNewPost] = useState({
        title:'',
        body:''
    });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createNewPost(newPost));
    }
    return(
        <header className="py-5">
            <div className="row mb-3">
                <h1 className="col-8 col-sm-10">Posts ABM</h1>
                <div className="my-auto">
                    <button 
                        className="btn btn-primary" type="button" data-toggle="collapse" 
                        data-target="#collapseForm" aria-expanded="false" aria-controls="collapseForm"
                    >        
                        Nuevo Post
                    </button>
                </div>
                
            </div>
            <div className="collapse" id="collapseForm">
                <div className="card card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input onChange={handleChange} type="text" className="form-control" value={newPost.title} name="title" id="title" aria-describedby="emailHelp"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Texto</label>
                            <textarea className="form-control" onChange={handleChange} name='body' value={newPost.body} id="body" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Guardar Nuevo</button>
                        
                    </form>
                </div>
            </div>
        </header>
    );
}
export default Header;