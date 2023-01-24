import ProfileC from "./ProfileClass";
import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentcount: 0,
    };
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent component did mount");
  }
  componentDidUpdate() {
    console.log("parent component did update");
  }
  render() {
    console.log("parent render");
    return (
      <>
        <div>about class component</div>
        {this.state.parentcount}
        <button
          onClick={() => {
            this.setState({
              parentcount: 21,
            });
          }}
        >
          update parent count
        </button>
        <ProfileC name={"akshay"} xyz="zyx" />
        {/* <ProfileC name={"khanna"} /> */}
      </>
    );
  }
}

export default About;

/*
parent constructor
parent render 
  child constructor : akshay
  child render : akshay
  child constructor : khanna
  child render : khanna
  child componend did mount : akshay
  child componend did mount : khanna
parent component did mount

*/
