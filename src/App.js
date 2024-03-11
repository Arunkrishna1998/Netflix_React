import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import RowPosts from './Components/RowPosts/RowPosts';
import Actions from './Components/Actions/Actions';
import Tvshows from './Components/Tvshows/Tvshows';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPosts/>
      <Actions/>
      <Tvshows/>
      <Footer/>
    </div>
  );
}

export default App;
