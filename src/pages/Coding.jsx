import AppDevelopment from '../components/coding/AppDevelopment'
import CP from '../components/coding/CP'
import MachineLearning from '../components/coding/MachineLearning'
import WebDevlopment from '../components/coding/WebDevlopment'

const Coding = () => {
  window.scrollTo(0,0)
  return (
    <div className='bg-gradient-to-b from-[#0a192f] to-[#0a192f] text-white divide-y divide-gray-800'>
      <WebDevlopment/>
      <AppDevelopment/>
      <MachineLearning/>
      <CP/>
    </div>
  )
}

export default Coding