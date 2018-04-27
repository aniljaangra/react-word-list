import React, { Component } from 'react';

class AddWord extends Component {

    constructor(props){
        super();
        console.log('Addword' , props)
        this.state = {
            wordFrom : '',
            wordTo : ''
        }
    }

    handleAdd = () => {
        this.props.onWordAdd({ wordFrom : this.state.wordFrom , wordTo : this.state.wordTo })
    }
    handleChange = ( key , event) => {
        this.setState({ [key] : event.target.value })
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.wordFrom} onChange={this.handleChange.bind(this, 'wordFrom')}/>
                <input type='text' value={this.state.wordTo}  onChange={this.handleChange.bind(this, 'wordTo')}/>
                <input type='button' value='Add' onClick={this.handleAdd}/>
            </div>
        );
    }
}

export default AddWord;