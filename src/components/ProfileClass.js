import React, { Component } from "react";

class ProfileC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo: {},
    };
    const { name } = this.props;
    console.log("child constructor : " + name);
  }
  async componentDidMount() {
    console.log(
      "child component did mount before api call : " + this.props.name
    );
    const data = await fetch("https://api.github.com/users/link2pk");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(
      "child component did mount after api call : " + this.props.name
    );
    // const { login } = this.state.userInfo;
    // console.log(this.state.userInfo);
  }
  componentDidUpdate() {
    console.log("child component did update : " + this.props.name);
  }
  render() {
    const { avatar_url } = this.state.userInfo;
    const { name } = this.props;
    const { count, count2 } = this.state;
    console.log("child render : " + name);
    return (
      <>
        <img src={avatar_url} alt="" />
        <p>profile class {name}</p>
        <p>count is {count}</p>
        <p>count2 is {count2}</p>
        <button
          onClick={() => {
            this.setState({
              count: 9,
              count2: 7,
            });
          }}
        >
          increase count
        </button>
      </>
    );
  }
}
export default ProfileC;
