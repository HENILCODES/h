import React, { Component } from 'react'

class Navbar extends Component {
  constructor(){
    super()
    console.log("Nav Cons");
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            Home
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar
