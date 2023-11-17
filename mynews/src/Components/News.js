import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';

class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading:false,
            
        }
    }



    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=51e689a74cd14dc38756453f72124e04&page=1&pageSize=${this.props.pageSize}`;
        {this.setState({loading:true})}
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.articles)
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults,
            loading:false

        })
    }


    handlePrev = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=51e689a74cd14dc38756453f72124e04&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        {this.setState({loading:true})}
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.articles)

        this.setState({
            articles: data.articles,
            page: this.state.page - 1,
            loading:false
        })
        console.log("previous")
    }

    handleNext = async () => {

        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }
        else {

            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=51e689a74cd14dc38756453f72124e04&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            {this.setState({loading:true})}
            let res = await fetch(url);
            let data = await res.json();

            console.log(data.articles)

            this.setState({
                articles: data.articles,
                page: this.state.page + 1,
                loading:false

            })

        }


        console.log("next")

    }


    render() {
        return (
            <>
            {this.state.loading && <Loading/> }
            
                {
                    this.state.articles.map((element) => {
                        return (
                            <div key={element.url}>
                                <NewsItem title={element.title} description={element.description} urlToImage={element.urlToImage} readMore={element.url} />
                            </div>
                        )
                    })
                }
                <button disabled={this.state.page <= 1} onClick={this.handlePrev}>&larr; previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNext}>next &rarr;</button>
            </>
        )
    }
}

export default News