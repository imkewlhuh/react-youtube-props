import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

let sampleData = [
  {
    thumbnailImg: "https://via.placeholder.com/600x400",
    videoTitle: "He did WHAT?!?! (My intial reaction)",
    videoUploader: "MaxTongster",
    dateVideoUploaded: "10-31-2022",
    videoViews: 10
  },
  {
    thumbnailImg: "https://via.placeholder.com/600x400",
    videoTitle: "I bought my best friend a Tesla (EMOTIONAL)",
    videoUploader: "Dave Doughbrick",
    dateVideoUploaded: "11-02-2022",
    videoViews: 300000
  },
  {
    thumbnailImg: "https://via.placeholder.com/600x400",
    videoTitle: "React in 100 seconds",
    videoUploader: "Fireship",
    dateVideoUploaded: "2022-09-08",
    videoViews: 255
  }
];

function YoutubeComponent(props) {
  return (
    <div className='container'>
      <img src={props.thumbnailImg} />
      <div className='content'>
        <p>{props.videoTitle}</p>
        <p>Views: {props.videoViews}</p>
        <p>{props.videoUploader}</p>
        <p>{props.dateVideoUploaded}</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className='app-container'>
    {sampleData.map(function(video) {
      return (
        <YoutubeComponent thumbnailImg={video.thumbnailImg}
        videoTitle={video.videoTitle}
        videoUploader={video.videoUploader}
        dateVideoUploaded={video.dateVideoUploaded}
        videoViews={video.videoViews} />
      )
    })}
    </div>
  )
}

export default App

