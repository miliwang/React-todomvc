import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoText: "",
      todoList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    
    console.log(event.target.value);
    this.setState({
      todoText: event.target.value
    })
  }

  handleBlur(event) {
    console.log(event)
  }
  handleKeyDown(event) {
    console.log(event)
  }
  render() {
    console.log(this.state.todoList)
    return (
      <div className="App">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus 
              onChange={this.handleChange} 
              onBlur = {this.handleBlur}
              onKeyDown = {this.handleKeyDown}/>
          </header>
          {/* <!-- This section should be hidden by default and shown when there are todos --> */}
          <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
              {/* <!-- These are here just to show the structure of the list items -->
                    <!-- List items should get the class `editing` when editing and `completed` when marked as completed --> */}
              {this.state.todoList.map((item,index) => {
                <li className="completed">
                  <div className="view">
                    <input className="toggle" type="checkbox" checked />
                    <label>Taste JavaScript</label>
                    <button className="destroy"></button>
                  </div>
                  <input className="edit" value="Create a TodoMVC template" />
                </li>
              })}
            </ul>
          </section>
          {/* <!-- This footer should hidden by default and shown when there are todos --> */}
          <footer className="footer">
            {/* <!-- This should be `0 items left` by default --> */}
            <span className="todo-count"><strong>0</strong> item left</span>
            {/* <!-- Remove this if you don't implement routing --> */}
            <ul className="filters">
              <li>
                <a className="selected" href="#/">All</a>
              </li>
              <li>
                <a href="#/active">Active</a>
              </li>
              <li>
                <a href="#/completed">Completed</a>
              </li>
            </ul>
            {/* <!-- Hidden if no completed items are left ↓ --> */}
            <button className="clear-completed">Clear completed</button>
          </footer>
        </section>
        <footer className="info">
          <p>Double-click to edit a todo</p>
          {/* <!-- Remove the below line ↓ --> */}
          <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
          {/* <!-- Change this out with your name and url ↓ --> */}
          <p>Created by <a href="http://todomvc.com">you</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
