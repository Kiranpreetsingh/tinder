import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRate from "@material-ui/icons/StarRate";
import Favorite from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
const SwipeButtons = () => {
  return (
    <div className='swipeButtons'>
      <IconButton className='swipeButtons__repeat'>
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons__left'>
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons__star'>
        <StarRate fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons__right'>
        <Favorite fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons__lightning'>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  )
}

export default SwipeButtons
