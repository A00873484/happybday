import React from 'react';
import ReactPlayer from 'react-player';

function Wish({icon, name, wish, video, img, clicked}) {
  return <div style={{marginLeft:'10vw', marginRight:'10vw', padding:'15px'}}> 
      {video?<div style={{borderRadius: '10px', overflow: 'hidden'}} >
        <ReactPlayer url={video} controls={true} width={'80vw'} height={'45vw'}/>
      </div>:img?<img src={img} style={{borderRadius: '10px', width:'80vw'}}/>:<div></div>}
      <div style={{display:"flex", paddingTop:"20px"}}>
        <img src={icon} style={{width:'50px', height:'50px', borderRadius:"10%"}}/>
        <div style={{textAlign: 'left', marginLeft:'10px'}}>
          <div style={{fontWeight: 'bold', fontSize:"35px"}}>{name}</div>
        </div>
      </div>
      <div style={{textAlign:'left'}}>{wish}</div>
    </div>
}
export default Wish;