import React from 'react'
import './Footer.css'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import {Grid, Slider} from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <img className='footer_albumLogo' src='' alt=' ' />
          <div className='footer_songinfo'>

          </div>
      </div>

      <div className='footer_center'>
        <ShuffleIcon className='footer_green' />
        <SkipPreviousOutlinedIcon className='footer_icon' />
        <PlayCircleOutlinedIcon fontSize='large' className='footer_icon' />
        <SkipNextOutlinedIcon className='footer_icon' />
        <RepeatIcon className='footer_green' />
      </div>

      <div className='footer_right'>
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer;