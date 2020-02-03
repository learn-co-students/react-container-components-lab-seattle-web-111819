import React from 'react'
import { ProgressPlugin } from 'webpack'
// Code MovieReviews Here

const everyReview = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (
    <div key={headline} className="review">

        <header>
          <a className="review-link" href={link.url}>{headline}</a>
          <span className="author">{byline}</span>
        </header>
        <blockquote>{summary_short}</blockquote>
    </div>
  )
}


const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(everyReview)}</div>

MovieReviews.defaultProps={
  reviews: []
}

export default MovieReviews