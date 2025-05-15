import React from 'react'


const Acads = () => {
  return (
    <div className='w-full px-6' id='academia'>
      <h1 className='w-fit min-w-48 text-4xl bg-[#0a192f] font-bold py-4 pl-2 z-50 sticky top-0'>Academics</h1>
      <div className='pb-16 w-full'>
        <div className='mx-36 px-8 pt-4 pb-8 grid grid-cols-2 border rounded border-white mt-4 bg-gray-900'>
          <div>
            <div>
              <h1 className='text-lg font-semibold py-4'>Bachelors in Artificial Intelligence and Data science (onging 1st year)</h1>
              <ul className='list-disc list-inside ml-9'>
                <li>IIT - Jodhpur, India</li>
                <li>Sem 1 CG = 8.82 | Departmental Rank = 12</li>
                <li>(A) in Computer science and Biotech</li>
                <li>(A-) in Electrical and Engineering Visualisation</li>
              </ul>
            </div>
            <div className='mt-4'>
              <h1 className='text-lg font-semibold py-4'>AIR 5991 in JEE Mains and 8041 in JEE Advanced (No drop)</h1>
            </div>
            <div>
              <h1 className='text-lg font-semibold py-4'>CBSE Intermediate Examination</h1>
              <ul className='list-disc list-inside ml-9'>
                <li>Percentage = 90.8%</li>
                <li>94 out of 100 in Information Practices</li>
                <li>Bhagwat VidyaPeeth, Chapra, Bihar</li>
              </ul>
            </div>
            <div>
              <h1 className='text-lg font-semibold py-4'>CBSE Matric Examination</h1>
              <ul className='list-disc list-inside ml-9'>
                <li>Percentage = 93.5%</li>
                <li>99 out of 100 in Computer Applications</li>
                <li>Bhagwat VidyaPeeth, Chapra, Bihar</li>
              </ul>
            </div>
          </div>
          <div className="w-full h-[500px] overflow-hidden relative">

            <div className="w-full h-12 bg-gray-900 absolute top-0 left-0 z-10 pointer-events-auto"></div>
            <div className="w-12 h-12 bg-gray-900 absolute bottom-0 left-0 z-10 pointer-events-auto"></div>
            <div className="w-20 h-12 bg-gray-900 absolute bottom-0 left-24 z-10 pointer-events-auto"></div>
            <div className="w-48 h-12 bg-gray-900 absolute bottom-0 right-0 z-10 pointer-events-auto"></div>
            {/* <div className="w-full h-[500px] bg-transparent absolute top-0 left-0 z-10 pointer-events-auto"></div> */}
            {/* ABOVE LINE MAKES MODEL READ ONLY  */}

            <iframe
              className="w-full h-[500px]"
              title="B33 - Pollinator Robot"
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src="https://sketchfab.com/models/9112fdb300ac471dac8c221e89103147/embed?autostart=1&transparent=1&preload=1&ui_hint=0">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Acads