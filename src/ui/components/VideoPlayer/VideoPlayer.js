'use client'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const VideoPlayer = ({ url, width, height, playIcon, preview, controls }) => {
  return (
    <ReactPlayer
      url={url}
      width={width}
      height={height}
      playing
      controls={controls}
      playIcon={playIcon}
      light={preview}
    />
  )
}

export default VideoPlayer
