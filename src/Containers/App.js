import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/Actions/App-Actions";
import Child from "../Components/Content";
class App extends Component {
  state = {
    test: new Date().getTime().toString()
  };
  componentDidMount() {}

  render() {
    const { collapsed } = this.props;
    return (
      <div>
        <Child />
        {this.state.test}
      </div>
    ); // end Return
  } // end Render
} // end App

const mapStateToProps = state => ({
  collapsed: state.appReducer.collapsed
});
const mapDispatchToProps = dispatch => ({
  collapseMe: collapsed => dispatch(actions.collapseMe(collapsed))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
