import React, { useEffect } from 'react'
import OnePost from './OnePost';
import {getPosts} from '../actions/PostAction';
import { useDispatch, useSelector } from 'react-redux';

const Posts = () => {
    const dispatch = useDispatch();
    useEffect( ()=>{
        const loadPosts = () => dispatch( getPosts() );
        loadPosts();
    }, [dispatch]);
    const posts = useSelector(state => state.posts.posts);
    return (
        <div className="container">
            <div className="row">
                {posts.length === 0 ?
                <p className="col-12">Cargando...</p>: 
                posts.map(post=>(
                    <OnePost 
                        key={post.id} 
                        post={post}
                    />
                ))}
                
            </div>
        </div>
    );
}

export default Posts;
