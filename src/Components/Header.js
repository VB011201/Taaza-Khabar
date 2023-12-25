import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
        <div className="container mt-5 ">
        <h1 className="text-center" id="header">
         <strong>{this.props.title}</strong>
        </h1>
      </div>
    )
  }
}

export default Header
