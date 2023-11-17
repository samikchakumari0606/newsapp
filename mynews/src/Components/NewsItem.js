import React from 'react'

const NewsItem = (props) => {

  return (
    <div>
        {/* <img src={props.urlToImage} alt="image"/> */}
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <a href={props.readMore} target="_blank">read more</a>
        
    </div>
  )
}

export default NewsItem