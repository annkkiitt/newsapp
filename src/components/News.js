import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  constructor(){
    super();
    console.log("Hello i'm from news components.")
    this.state={
      article: [],
      loading: false,
      page: 1,
    }
  }

//   life cycle method which will run after render
    async componentDidMount(){
    let URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=79c131ef12874f9591e7486d612c9016&page=1&pageSize=18`
    let data = await fetch(URL);
    let parsedData = await data.json();
    this.setState({article: parsedData.articles,
    totalResults: parsedData.totalResults
  })
  }

  handlePrevious=async ()=>{
    let URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=79c131ef12874f9591e7486d612c9016&page=${this.state.page-1}&pageSize=18`
    let data = await fetch(URL);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page -1,
      article: parsedData.articles
    })
    const btn = document.getElementById('nextBtn');
      btn.disabled=false;
  }
  handleNext=async ()=>{
    if(Math.ceil(this.state.totalResults/18) < this.state.page+1){
      const btn = document.getElementById('nextBtn');
      btn.disabled=true;
    }
    else{
      let URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=79c131ef12874f9591e7486d612c9016&page=${this.state.page+1}&pageSize=18`
      let data = await fetch(URL);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page +1,
        article: parsedData.articles
      })
    }
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
          <div className="d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
          <button type="button" id="nextBtn" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
          </div>
        </div>
        </>
    )
  }
}
