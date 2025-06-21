import { BrowserRouter } from 'react-router-dom';

import { About, Experience, Hero, Navbar, Tech, Works, ErrorBoundary, Feedbacks, Contact, StarsCanvas } from './components';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <ErrorBoundary>
            <Tech />
          </ErrorBoundary>
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App