import React from 'react';
import RouterIndex from './routes/index';
import Nav from './components/nav';
import Footer from './components/footer';
import Aside from './components/sideBar';

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
        <Aside/>
        <RouterIndex/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
