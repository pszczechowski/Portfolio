import React from "react"
import Thumbnail from "../Thumbnail"
 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
     link="/twitter"
     image="http://twitter-image-url.jpg"
     title="Twitter Newsfeed"
     category="Mobile App"
      />
    </div>
  )
}
 
export default Projects;