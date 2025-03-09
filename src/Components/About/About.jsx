import React from 'react'
import Heading from '../Heading/Heading'

function About() {
  return (
    <>
    <div className='container'>
    <Heading text={'about component'}></Heading>
    <div className=' md:flex md:gap-6 text-start text-white pt-5'>
    <div className=' w-full pb-3 md:ps-5 '>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      <div className='  w-full md:pe-5'>
        <p>Freelancer is a free bootstrap theme created by Route. Thedownload includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default About
