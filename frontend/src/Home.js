import './Home.css';
import sample from './assets/background_video.mp4';
import React from 'react';

function Home()
{
    return(
        <body className='body1'>
        <video autoPlay muted loop id="myVideo">
        <source src={sample} type="video/mp4"/ >
        Your browser does not support HTML5 video.
        </video>
        <div class="content">
  <h1>Indian Railways</h1>
</div>
        </body>


    );
}
export default Home;