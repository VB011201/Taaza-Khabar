import React, { Component } from 'react'
import loading from "../Spinner-1.3s-204px.gif"
export class Loading extends Component {
  render() {
    return (
        <div className="container text-center my-3">
            <img src={loading} className='rounded mx-auto d-block' alt="" />
        </div>
    )
  }
}

export default Loading
