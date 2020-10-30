import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  UNSAFE_componentWillMount() {
    console.log("component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log("render");

    return (
      <div>
        <h1>哈哈</h1>
      </div>
    );
  }
}

class Index extends Component {
  constructor() {
    super();
    this.state = {
      isShowHeader: true,
    };
  }

  handleShowOrHide() {
    this.setState({
      isShowHeader: !this.state.isShowHeader,
    });
  }

  render() {
    return (
      <div>
        {this.state.isShowHeader ? <Header /> : null}
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或者隐藏标题
        </button>
      </div>
    );
  }
}

export default Index;
