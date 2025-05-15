import SkillShowcase from './SkillShowcase'
import {webdskills} from '../../data/codingSkills'
import Projects from '../Shared/Projects'

const WebDevlopment = () => {
  return (
    <div className='w-full px-6'>
        <h1 className='w-fit min-w-48 text-3xl bg-[#0a192f] font-bold py-4 pl-2'>Web devlopment</h1>
        <div className='w-full flex justify-center'>
          <SkillShowcase data={webdskills}/>
        </div>
        <Projects filter='webd'isSticky={false}/>
    </div>
  )
}

export default WebDevlopment