import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  render() {
    return (
        <>
         <div>This is newsComponent.</div>
         <Newsitem/>
         <Newsitem/>
         <Newsitem/>
         <Newsitem/>
        </>
    )
  }
}
