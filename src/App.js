import React from 'react';
import Review from './Review';
import {FaGithubSquare} from 'react-icons/fa'

function App() {
  return <section className='container' >
    <div className='title' >
      <FaGithubSquare className='icon' />
      <h2>Our rewievs</h2>
      <div className='underline' ></div>
    </div>
    <Review />
  </section>
}

export default App;
