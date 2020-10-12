import React from 'react';
import ReactPlayer from 'react-player';

function Thirty({feature, callback}) {
  return <div>
    {
      feature?
        <div style={{ marginBottom: '-40px', marginLeft: '-40px'}}>
          <div style={{display:'flex'}}> 
            <div style={{fontWeight:"900", fontSize:"700%", letterSpacing:"-36px", lineHeight:'85%', marginRight:'36px'}}>30</div>
            <div style={{textAlign:'left', fontWeight:'200', fontSize:"250%"}}>
              <div>Survival</div>
              <div>Pack</div>
            </div>
          </div>
          <img src={'/img/hbd.png'} style={{maxHeight: '80px',
                maxWidth: '150px',
                filter: 'invert(1)',
                position: 'relative',
                left: 'calc( 55% )',
                top: '-50px'}} onClick={callback}/>
        </div>:
        <div>
          <div style={{ marginBottom: '-40px', marginLeft: '-40px'}}>
            <img src={'/img/hbd.png'} style={{maxHeight: '280px',
                  maxWidth: '540px',
                  }}/>
            <div style={{display:'flex', position: 'relative', width:'10px',
                  left: 'calc( 74% )',
                  top: '-200px'}} onClick={callback}> 
              <div style={{fontWeight:"900", fontSize:"200%", letterSpacing:"-6px", lineHeight:'85%', marginRight:'6px'}}>30</div>
              <div style={{textAlign:'left', fontWeight:'250', fontSize:"70%"}}>
                <div>Survival</div>
                <div>Pack</div>
              </div>
            </div>
            
          </div>
        </div>
    }
  </div>;

}
export default Thirty;