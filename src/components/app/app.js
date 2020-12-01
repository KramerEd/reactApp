import React from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './css/app.css';
import './css/app-header.css'
import './css/index.css'
import './css/post-add-form.css'
import './css/post-add-form.css'
import './css/post-list.css'
import './css/post-list-item.css'
import './css/post-status-filter.css'
import './css/search-panel.css'


const App = () =>{

    const data = [
        {label: 'Gonna learn all' , important: true},
        {label: 'Learning all' , important: false},
        {label: 'Oh shit, im shit' , important: false}
    ];

    return(
        <div className = "app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts = {data}/>
            <PostAddForm />
        </div>
    );
}

export default App;