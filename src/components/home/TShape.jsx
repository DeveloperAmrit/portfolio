import React from 'react'
import tskills from '../../data/tskills'

const bgcolors = ['pink-100', 'blue-100', 'gray-950', 'black', 'white', 'green-100']
const textcolors = ['pink-900', 'blue-900', 'gray-100', 'red-400', 'gray-800', 'green-900']

const TShape = () => {
    return (
        <div className='w-full px-6'>
            <h1 className='w-fit min-w-48 text-4xl bg-[#0a192f] font-bold py-4 pl-2 z-50 sticky top-0'>T-Shape representation</h1>
            <div className='pb-16 w-full'>
                <div className='flex justify-center gap-x-4 capitalize mt-10'>
                    {tskills.map((skill, i) => <Vertical key={i} title={skill.title} body={skill.body} bgcolor={bgcolors[i]} textcolor={textcolors[i]} />)}
                </div>
            </div>
        </div>
    )
}

export default TShape


const Vertical = ({ title, body, bgcolor, textcolor }) => {
    return (
        <div className={`w-44 h-fit bg-${bgcolor} text-${textcolor} border-[1px] py-2 px-3 hover:scale-[1.02] transition-transform duration-300`}>
            <h1 className='font-bold text-2xl py-2 text-center'>{title}</h1>
            {body.map((element, _) =>
                <div key={_} className='pb-2 border-t-[1px]'>
                    <h1 className='font-semibold text-xl py-2 text-center'>{element.title}</h1>
                    <ul className='list-disc list-outside pl-6'>
                        {element.items.map((item) => <li key={item} className=''>{item}</li>)}
                    </ul>
                </div>
            )}


            {/* For tailwind */}
            <div className='bg-pink-100 text-pink-900 hidden'>
                <div className='bg-blue-100 text-blue-900'></div>
                <div className='bg-gray-950 text-gray-100'></div>
                <div className='bg-black text-red-400'></div>
                <div className='bg-white text-gray-800'></div>
                <div className='bg-green-100 text-green-900'></div>
            </div>
        </div>
    )
}