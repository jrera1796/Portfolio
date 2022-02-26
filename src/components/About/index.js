import React, {useState} from "react";
import yoursTruly from '../../assets/images/91B94B58-A2A4-435E-A08B-3FC1CE1127A2_4_5005_c.jpeg';
import Extra from '../Extra'

function About() {
const buttonHandler = () =>{
  if(showExtra === true){
    setShowExtra(false)
  }else{
  setShowExtra(true)
  }
}
  const [showExtra, setShowExtra] = useState(false);

  return (
    <section id="about">
      <div className="about-section">
        <div>
          <img src={yoursTruly} className="my-5" style={{ borderRadius: "100%" }} alt="cover" />
        </div>
        <div className="about-margin" style={{ textAlign: "center" }}>
          <div>
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

        <div className=" py-2 px-2 about-margin">
          <p>I'm a motivated and career driven indivdual with 4 years of Management experience and 8 years in Customer Service. I'm always up for a new challenge!</p>
        </div>
      </div>
      
      {showExtra?(
        <div>
      <Extra>       
      </Extra>
       <button onClick={buttonHandler}>Show Less</button>
       </div>
      ):(
        <button onClick={buttonHandler}>Show More</button>
      )}
    </section>
  )
}

export default About;
