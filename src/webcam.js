import React, { useState } from 'react';
import { Camera } from 'react-html5-camera-photo';
import ImagePreview from './ImagePreview';
import 'react-html5-camera-photo/build/css/index.css';

function Photo (props) {
  const [dataUri, setDataUri] = useState('');

  function handleTakePhotoAnimationDone (dataUri) {
    console.log('takePhoto');
    console.log(dataUri);
    setDataUri(dataUri);
  }

  const isFullscreen = false;
  return (
    <div>
      {
        (dataUri)
          ? <ImagePreview dataUri={dataUri}
            isFullscreen={isFullscreen}
          />
          : <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
          />
      }
    </div>
  );
}

export default Photo;
