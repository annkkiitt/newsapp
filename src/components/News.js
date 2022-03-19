import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  constructor(){
    super();
    console.log("Hello i'm from news components.")
    this.state={
      article: [],
      loading: false
    }
  }

//   life cycle method which will run after render
    async componentDidMount(){
    let URL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=79c131ef12874f9591e7486d612c9016"
    let data = await fetch(URL);
    let parsedData = await data.json();
    this.setState({article: parsedData.articles})
  }
  render() {
    
    return (
        <>
        <div className="container my-2">
          <h1>NewsMonkey: Top news headlines of INDIA</h1>
          <div className="row my-2">
            {this.state.article.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                  <Newsitem title={element.title?element.title:""} description={element.content?element.content.slice(0,100):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
            
          </div>
        </div>
        </>
    )
  }
}
