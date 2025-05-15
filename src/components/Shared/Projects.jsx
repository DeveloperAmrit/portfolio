import ProjectCard from '../home/Utils/ProjectCard'
import projects from '../../data/projects'


const Projects = ({filter="all",isSticky=false}) => {
  let filteredProjects = projects;
  if(filter!="all"){
    filteredProjects = projects.filter((project)=>project.category.includes(filter))
  }
  return (
    <div className='w-full px-6' id='projects'>
      <h1 className={`w-fit min-w-48 text-4xl bg-[#0a192f] font-bold py-4 pl-2 z-50 ${isSticky && "sticky top-0"}`}>Projects</h1>
      <div className='pb-16 w-full'>
        <div className='mt-10 mx-20 grid grid-cols-3 gap-x-4 gap-y-16'>
          {filteredProjects.map((element, _) => <ProjectCard key={_} project={element} />)}
        </div>
      </div>
    </div>
  )
}

export default Projects