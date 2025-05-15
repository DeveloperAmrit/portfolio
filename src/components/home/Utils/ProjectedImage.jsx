import'../../../styles/flickerBeam.css';
import GlitchImage from './GlitchImage';

const ProjectedImage = ({ src, flickersrc }) => {


    return (
        <div className="relative flex flex-col justify-center items-center h-screen  ">
            {/* Projected Image */}
            <div className="bg-white p-5 z-20 mb-10  shadow-[0_0_30px_white] glitch-image overflow-hidden">
                <GlitchImage src={src} flickersrc={flickersrc} width='w-3xs' alt='HEROIMG'/>
            </div>

            {/* Light Beam with Flicker */}
            <div className="w-0 h-0 relative bottom-5 z-10 border-x-[140px] border-t-[150px] border-x-transparent border-t-gray-300 bg-transparent animate-flickerBeam opacity-10"></div>


            {/* Light Source */}
            <div className="w-5 h-2.5 bg-white rounded-[50%] shadow-[0_0_15px_white] z-30"></div>

        </div>
    );
};

export default ProjectedImage;
