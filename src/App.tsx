import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Typography from '@mui/material/Typography';
import FilmsCarousel from './components/Carousel/components/FilmsCarousel';

const App: React.FC = () =>  {
  return (
    <div className="App">
      <Navbar />
      <h1 className='Header'>Star Wars App</h1>
      <Typography variant="h6" gutterBottom className='Subtitle'>
        Welcome to the StarWars world with all the movies and planets and characters details.
      </Typography>
      <FilmsCarousel />
    </div>
  );
}

export default App;
