import moment from 'moment';
import React from 'react';
import RatingsOverview from './RatingOverview.jsx';
import StarRating from './StarRating.jsx';
import Thumbs from './Thumbs.jsx'

const Reviews = (props) => {
  const reviews = props.reviews.map((review) =>
    <div id={review.id} class='review-body row'>
      <StarRating rating={review.rating}/>
      <div class='review-headline'>{review.headline}</div>
      <div class='review-comments'>{review.comments}</div>
      <div class='review-tags'>{review.tags}</div>
      <span class='review-user'>{review.username}</span>
      <span class='pull-right'>
        <span class='review-date'>{moment(review.date_created).format('l')}</span>
        <Thumbs thumbs_up={review.thumbs_up} thumbs_down={review.thumbs_down} />
      </span>
    </div>
  );

  return (
    <div className='reviews-accordion'>
      <div class='accordion-container'>
        <div class='accordion-header'>Verified Reviews ({props.reviews.length})</div>
        <div class='accordian-body'>
          <div class='reviews-container'>
          <div class='reviews-body'>
          <div class='row'>
            <div class='col-md-7 col-lg-7'>{reviews}</div>
            <div class='col-md-5 col-lg-5'><RatingsOverview average={props.breakdown}/></div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;

