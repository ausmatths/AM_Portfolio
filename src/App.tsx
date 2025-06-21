import { BrowserRouter } from 'react-router-dom';

import { About, Experience, Hero, Navbar, Tech, Works, ErrorBoundary, Feedbacks } from './components';

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
          {/* Other sections will be added later when we build them */}
        </div>
      </BrowserRouter>
    </>
  )
}

export default App