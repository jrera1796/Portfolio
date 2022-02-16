import React from "react";
import resFile from "../../assets/files/JoseResume.pdf"
function Resume() {
  return (
    <section className="flex-nowrap space-evenly">
    <div>
      <embed src={resFile} width="1000px" height="900px" />
    </div>
    </section>
  )
}

export default Resume;