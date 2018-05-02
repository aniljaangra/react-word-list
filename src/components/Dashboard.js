import { Link, Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ADD_WORD } from "../store/actions/word";
import AddWord from "../containers/word/Add";
import WordList from "../containers/word/List";

import React, { Component } from "react";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = { words: [] };
  }
  onWordAdd(word) {
    this.props.addWord(word);
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={this.props.match.url + "/word/list"}>Word List</Link>
          </li>
          <li>
            <Link to={this.props.match.url + "/word/add"}>Add Word</Link>
          </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
        <Switch>
          <Route
            render={() => {
              return <WordList words={this.props.words} />;
            }}
            path="/dashboard/word/list"
          />
          <Route
            render={() => {
              return <AddWord onWordAdd={this.onWordAdd.bind(this)} />;
            }}
            path="/dashboard/word/add"
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    words: state.words
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addWord: word => dispatch(ADD_WORD(word))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);
