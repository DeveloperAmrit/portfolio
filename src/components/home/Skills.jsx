import React from 'react'
import SkillButton from './Utils/SkillButton'

const skills = [
  {
    name: 'Coding',
    path: '/coding',
    position: 'Master'
  },
  {
    name: 'Cybersecurity',
    path: '/cybersecurity',
    position: 'Intermediate'
  },
  {
    name: 'Robotics',
    path: '/robotics',
    position: 'Expert'
  },
  {
    name: 'CAD',
    path: '/cad',
    position: null
  },
  {
    name: 'Finance',
    path: '/finance',
    position: null
  },
  {
    name: 'Soft skills',
    path: 'softskills',
    position: null
  }
]

const Skills = () => {
  return (
    <div className='w-full px-6 mt-1' id='skills'>
      <h1 className='w-fit min-w-48 text-4xl bg-[#0a192f] font-bold py-4 pl-2 z-50 sticky top-0'>Skills</h1>
      <div className='pb-16 w-full'>
        <div className='flex w-full justify-center items-center  mt-24'>
          <div className='grid grid-cols-3 gap-6'>
            {skills.map((skill, _) => <SkillButton key={_} text={skill.name} path={skill.path} position={skill.position} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills