const VideoTitle = (props)=>{
    return (<div className="">
        <h1 className="text-3xl font-bold">{props.movie.original_title}</h1>
        <p className="py-6 text-lg w-1/4">{props.movie.overview}</p>
    </div>)
}
export default VideoTitle;