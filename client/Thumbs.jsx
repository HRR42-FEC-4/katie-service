import React from 'react';

const Thumbs = (props) => {

  return (
    <span>
    <span class='review-up'><button class='thumbs-button' onClick={handleClick}><i class='fa fa-thumbs-o-up thumb'></i> {props.thumbs_up}</button></span>
    <span class='review-down'><button class='thumbs-button' onClick={handleClick}><i class='fa fa-thumbs-o-down thumb'></i> {props.thumbs_down}</button></span>
    </span>
  )
}

export default Thumbs;