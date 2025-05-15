import SkillShowcase from './SkillShowcase'
import {CPSkills} from '../../data/codingSkills'
import Projects from '../Shared/Projects'

const CP = () => {
  return (
    <div className='w-full px-6'>
        <h1 className='w-fit min-w-48 text-3xl bg-[#0a192f] font-bold py-4 pl-2'>Competitve programming</h1>
        <div className='w-full flex justify-center'>
          <SkillShowcase data={CPSkills}/>
        </div>
        {/* <Projects filter='aiml'/> */}
    </div>
  )
}

export default CP