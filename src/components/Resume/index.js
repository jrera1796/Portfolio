import React from "react";
import resFile from "../../assets/files/JoseResume.pdf"
function Resume() {
  return (
    <section className="flex-nowrap space-evenly">
    <div>
      <object aria-label="Resume" width={'180vh!'} height="400px" data={resFile}></object>

    </div>
    </section>
  )
}

export default Resume;