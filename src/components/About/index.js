import React from "react";
import yoursTruly from '../../assets/images/91B94B58-A2A4-435E-A08B-3FC1CE1127A2_4_5005_c.jpeg';

function About() {
  return (
    <section className="my-2 flex-nowrap" >
      <div className="mx-2">
        <img src={yoursTruly} className="my-5" style={{ borderRadius: "100%" }} alt="cover" />
      </div>
     
      <div className="mx-2">
      <div>
        <h2 id="about">Jose Rivera</h2>
        <h6 style={{ marginTop: "-10px" }}>&nbsp;&nbsp;San Francisco, California</h6>
      </div>
        <p className="mx-2" style={{ wordWrap: "break-word" }}>
        In 2020 the world as I knew it changed. The hustle and bustle that once gave life to The City quickly shifted into silence and uncertainty. During these times I had the opportunity to take a deep breath and reflect on the things I wanted to do.
        As a kid I enjoyed taking things apart and putting them back together or 'MacGyvering' something out of the miscellaneous parts. I'd have to admit I still enjoy analyzing how things work the way they do. I've always been fond of computers and would spend the wee hours of the night exploring everything I could find.  </p>

        <p className="mx-2">Over the years my interests have ranged, from studying psychology, taking photography, producing digital music, to 3D modeling...the list goes on. What I've noticed is that I gravitate towards things that require attention to detail.</p>
        
      </div>




    </section>
  )
}

export default About;
