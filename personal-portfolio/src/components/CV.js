import React from 'react'
import CV from '../assets/img/CV-FitoreTahiri.pdf';

const CV = () => {
  return (
    <div classname="cv">
        <a href={CV} download className="btn">Download CV</a>&nbsp;&nbsp;&nbsp;
        <a href="#contact"className="btn btn-primary">Lets Talk</a>
    </div>
  )
}

export default CTA