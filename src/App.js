import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Posts from './components/Posts';
import EditModal from './components/EditModal';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <div className="container">
                <Header/>
                <Posts/>
                <EditModal/>
            </div>
        </Provider>
    )
}

export default App;
