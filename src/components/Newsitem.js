import React, { Component } from 'react'

export default class Newsitem extends Component {
  
  render() {
    let {title,description,imgUrl,newsUrl} = this.props;

    return (
      <>
      <div className="card" style={{width: "18rem"}}>
      <img src={imgUrl?imgUrl:"https://feeds.abplive.com/onecms/images/uploaded-images/2022/03/04/5d6215cd6a73953fbbc5ec2e2e7bb228_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628"} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
      </div>
    </div>
      </>
    )
  }
}
