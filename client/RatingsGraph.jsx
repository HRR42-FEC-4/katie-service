import React from 'react';

const RatingsGraph = (props) => {
  return (
    <div class='row'>
      <div class='col-md-2 col-lg-2'>
        <p class='star-rating-text pull-right'>{ props.rating + ' stars' }</p>
      </div>
      <div class='col-md-7 col-lg-7'>
        <div class='progress reviews-progress'>
          <span class='progress-bar progress-bar-blue' role='progressbar' aria-valuenow={props.percent} aria-valuemin='0' aria-valuemax='100' style={{ width: props.percent + '%' }}></span>
        </div>
        </div>
        <div class='col-md-1 col-lg-1'>
        <p class={props.rating + '-star rating-text-right'}> {props.ratingCount}</p>
        </div>
      </div>
  )
}

export default RatingsGraph;
