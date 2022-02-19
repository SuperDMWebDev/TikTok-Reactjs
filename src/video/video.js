import video from './video.mp4';
import {useRef} from 'react';
import {forwardRef, useImperativeHandle} from 'react';
function Video(props,ref){
    const videoRef=useRef();
    useImperativeHandle(ref, ()=>({
        play(){
            videoRef.current.play();
        },
        pause(){
            videoRef.current.pause();
        }
    }));

    return(
        <video ref={videoRef} src={video} width={280} style={{marginLeft:'280px'}} controls></video>
    )
}
export default forwardRef(Video);