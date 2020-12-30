import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  // handleOnClick() {
  //   this.props.store.dispatch(addItem());
  // }

  handleOnClick = event => {
    this.props.addItem()
  }


//   render() {
//     debugger
//     return (
//       <div className="App">
//         <button onClick={(event) => this.handleOnClick(event)}>
//           Click
//           </button>
//         <p>{this.props.items.length}</p>
//       </div>
//     );
//   }
// };

render() {
  debugger
  return (
    <div className="App">
      <button onClick={this.handleOnClick}>
        Click
        </button>
      <p>{this.props.items.length}</p>
    </div>
  );
}
};



export default connect(state => ({ items: state.items }), { addItem })(App);

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };


// export default connect(mapStateToProps, { addItem })(App); // Code change: no mapDispatchToProps function required!



// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };
 
// export default connect(mapStateToProps, mapDispatchToProps)(App);