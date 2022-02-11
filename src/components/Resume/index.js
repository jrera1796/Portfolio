import React from "react";
import resFile from "../../assets/files/JoseResume.pdf"
function Resume(){
  return (
    <div>
<object aria-label="Resume" width="400px" height="400px" data={resFile}></object>

    </div>
  )
}

export default Resume;