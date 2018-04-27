import {Link , Switch , Route } from 'react-router-dom';
import AddWord from '../containers/word/Add';
import WordList from '../containers/word/List';

import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = { words : [] }
    }
    onWordAdd(word){
        this.setState((prevState)=>{
            return { words : [...prevState.words , word] }
        })
    }
    render() {
        return (<div>
                <ul>
                       <li>
                       <Link to={this.props.match.url+'/word/list'}>Word List</Link>
                    </li>
                    <li>
                    <Link to={this.props.match.url+'/word/add'}>Add Word</Link>
                    </li>
                    <li>
                    <Link to='/login'>Logout</Link>
                    </li>
                </ul>
                <Switch>
                    <Route render={()=>{
                        return <WordList words={this.state.words}/>
                    }} path='/dashboard/word/list' />
                    <Route render={()=>{
                        return <AddWord onWordAdd={this.onWordAdd.bind(this)}/> 
                    }} path='/dashboard/word/add' />
                </Switch>        
            </div>
        );
    }
}

export default Dashboard;