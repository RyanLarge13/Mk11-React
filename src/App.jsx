import { Header, WhatIsNew, Navbar, SignUp, Tutorials, Hero, Footer } from './components';

const App = () => (
  <>
    <div className='bg-black w-[100vw]'>
      <Navbar />
      <Header />
      <Hero />
      <Tutorials />
      <WhatIsNew />
      <SignUp />
      <Footer />
    </div>
  </>
);

export default App;
