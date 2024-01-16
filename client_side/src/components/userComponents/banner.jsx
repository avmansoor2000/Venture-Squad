import React from 'react'

const banner = () => {
    const videoUrl = "https://cdn.dribbble.com/userupload/7472277/file/original-3c0ec914e46bf404db3cd5f3d8ac7992.mp4"
    return (
      <div>
         <video width="50%" height="1360" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
  )
}

export default banner