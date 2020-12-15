import React, {Component} from 'react'
import './App.css'
import {connect} from 'react-redux'
import {addItem} from './actions/items'

class App extends Component {
  handleOnClick = event => {
    this.props.addItem() //code change: this.props.store.dispatch is no longer being called
  }

  render() {
    debugger
    return(
      <div className="App">
        <button onClick={this.handleOnClick}>Click</button>
        <p>{this.props.items.length}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    // allows this.props.items
    items: state.items
  }
}

//code change: this new function takes in a dispatch as an arguement. it then returns an object that contains a function as a value. notice that above in handleOnClick() that this function, addItem(), is what is called, not the addItem action creator itself.
const mapDispatchToProps = dispatch => {
  return {
    // this.props.addItem()
    addItem: () => {
      dispatch(addItem())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// if we wanted to delete the mapDispatchToProps and mapStateToProps functions
  // export default connect(state => ({items: state.items}), {addItem})(App)