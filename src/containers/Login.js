import React , {Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component{

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.history.push('/dashboard');
    }
    constructor(props){
        super();
        this.state = {
            username : '',
            password : ''
        }
    }
    handleChange(key ,e){
        this.setState({ [key] : e.target.value })
    }
    render(){
        return (
        <div className='container'>
            <form>
                <input type='text' value={this.state.username} onChange={this.handleChange.bind(this , 'username')}/>
                <input type='password' value={this.state.password} onChange={this.handleChange.bind(this , 'password')}/>
                <input type='button' value='Login' onClick={this.onSubmit}/>
            </form>    
        </div>
        )
    }
}

export default withRouter(Login);