import React from 'react'
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {

  return (

    // This <Box /> is like a div
    <Box width= '400px' sx={{width: {xl : '1488px'}}} m='auto'>      

        <Navbar />
        {/* This is our Routing */}
        <Routes>
            {/* Routing for the home  */}
            <Route path='/' element= {<Home />} />

            {/* Routing for the exercise with a dynamic :id  instead of page 1,2,3 ,4 */}
            <Route path='/exercise/:id' element= {<ExerciseDetail />} />
        </Routes>
        <Footer />
    </Box>
  )
  
}

export default App;