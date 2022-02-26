import React from "react";
import resFile from "../../assets/files/JoseResume.pdf"
function Resume() {
  return (
    <section className="flex-nowrap space-evenly">
    <div>
      <embed className="PDF" src={resFile} />
    </div>
    </section>
  )
}

export default Resume;