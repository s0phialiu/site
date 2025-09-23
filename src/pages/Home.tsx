import About from '../sections/About'
import ShareMe from '../sections/ShareMe'
import Resume from '../sections/Resume'


function Home() {

  return (
    <div className='p-8'>
      <div className="grid lg:grid-cols-2 gap-4 border-b-1 border-slate-200 pb-4 mb-4 mt-4">
        <About />
        <ShareMe />
      </div>
      <Resume />
    </div>
  )
}

export default Home
