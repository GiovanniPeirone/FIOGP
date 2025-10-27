
type Video = {
    videoPath : string
}

export default function Video({videoPath} : Video){
    return (
        <video src={videoPath} controls>
            <source src={videoPath} type="video.mp4"/>
            Your browser does not support the video.
        </video>
    );
}