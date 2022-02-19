import {useEffect, useImperativeHandle, useRef} from 'react';
import Video from './video/video';

function App21(){
    const videoRef=useRef();
    useEffect(()=>{
        console.log(videoRef.current);
    })
    const handlePlay=()=>{
        videoRef.current.play();
    }
    const handleEnd=()=>{
        videoRef.current.pause();
    }
    return(

        <div>
           
            <Video ref={videoRef}
            />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handleEnd}>Stop</button>
        </div>
    )
}

export default App21;