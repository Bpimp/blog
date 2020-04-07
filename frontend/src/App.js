import React from 'react';
import RouterIndex from './routes/index';
import Nav from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Nav/>
        <RouterIndex/>
      <Footer/>
    </div>
  );
}

export default App;
