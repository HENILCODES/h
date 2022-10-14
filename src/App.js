import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    console.log("Constr");
    this.state= {
      data: this.data
    } 
  }
  async componentDidMount() {
    console.log("Start");

    let ob = await fetch("https://henil-code.github.io/test/sem4Result.json");
    let data = await ob.json();
    console.log(data);
    return data
  }

  render() {
    return (
      <>{console.log(this.state.data)}
        <h1>Hello</h1>
      </>
    );
  }
}
