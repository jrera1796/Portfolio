import React from "react";
import yoursTruly from '../../assets/images/91B94B58-A2A4-435E-A08B-3FC1CE1127A2_4_5005_c.jpeg';

function About() {
  return (
    <section id="About1">
      <div className="about-section">
        <div>
          <img src={yoursTruly} className="my-5" style={{ borderRadius: "100%" }} alt="cover" />
        </div>
        <div style={{ textAlign: "center" }}>
          <div className="about-margin">
            <div>
              <h2 id="about">Jose Rivera</h2>
              <h6 style={{ marginTop: "-8px" }}>San Francisco, California</h6>
            </div>
            <table>
              <thead>
                <td></td>
                <td>Highlights</td>
              </thead>
              <tbody>
                <tr>
                  <td>Javascript</td>
                  <td>HTML</td>
                  <td>CSS</td>
                </tr>
                <tr>
                  <td>NodeJS</td>
                  <td>MySQL</td>
                  <td>MongoDB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div style={{margin: "5%", textAlign: "center" }}>

        <div>
          <p>Hello world! I'm a Full Stack Developer currently enrolled in UC Berkeleys coding bootcamp</p>
        </div>
      </div>
      
    </section>
  )
}

export default About;
