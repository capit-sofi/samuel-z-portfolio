import { BrowserRouter,Routes, Route } from "react-router-dom";


import { About, Contact,Skills, Feedbacks, Hero, Navbar, Experiance, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <StarsCanvas />
          
        </div>
        <Routes>
         <Route path="/" element={<Hero/>} /> 
        <Route path="/Hero" element={<Hero/>} />          {/* Home page */}
        <Route path="/About" element={<About />} />    {/* About page */}
        <Route path="/Skills" element={<Skills />} /> 
        <Route path="/Experiance" element={<Experiance/>} />
        <Route path="/Works" element={<Works />} />  {/* Skills page */}
        <Route path="/Contact" element={<Contact />} />{/* Contact page */}
      </Routes>

        <div className='relative z-0'>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
