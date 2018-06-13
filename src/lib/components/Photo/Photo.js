import React from 'react';

const imgStyle = {
  display: 'block',
  //
  transform: 'translateZ(0px) scale3d(0.9, 0.9, 1)'
};

const cont = {
  backgroundColor: 'transparent',
  overflow: 'hidden',
  float: 'left',
  position: 'relative'
}

export default ({ photo, margin}) => {
  //calculate x,y scale
  const sx = (100 - ((26 / photo.width) * 100)) / 100;
  const sy = (100 - ((26 / photo.height) * 100)) / 100;
  imgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;
  return (
    <div className="photo" style={{ margin, width: photo.width, ...cont }}>
      <img style={{ ...imgStyle }} {...photo} />
    </div>
  );
}