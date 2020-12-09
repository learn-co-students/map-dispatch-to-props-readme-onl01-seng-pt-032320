import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    this.props.addItem();
  }

  render() {
    debugger
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   }
// }
//export default connect(mapStateToProps, mapDispatchToProps)(App);

export default connect(state => ({ items: state.items }), { addItem })(App);
//The object just needs to contain key/value pairs for 
//each action creator we want to become props. (i.e., { addItem: addItem})
//you can use the shorthand if your key and value are the same 
//connect incorporates dispatch for us, passing in the key which calls the action creator
//that is stored in the value dispatch(addItem())