import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.d= this.data;
  }
  async componentDidMount() {
    let ob = await fetch("https://henil-code.github.io/test/data.json");
    let data = await ob.json();
    console.log(data[0].gender);
  }
  render() {
    return (
      // <>{console.log(this.state.d)}
        <h1>Hello</h1>
      // </>
    );
  }
}
