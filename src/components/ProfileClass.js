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
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("timer");
    }, 500);
  }
  componentDidUpdate() {
    console.log("child component did update : " + this.props.name);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("unmount called");
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
