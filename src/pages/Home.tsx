import About from '../sections/About'
import ShareMe from '../sections/ShareMe'
import NewResume from '../sections/NewResume'
import Footer from '../sections/Footer'

function Home() {
  return (
   <div className="justify-center px-6 py-4 max-w-3xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-4 pb-2 mb-4 mt-2">
        <About />
        <ShareMe />
      </div>
      <NewResume />
      <Footer />
    </div>
  )
}

export default Home
