import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/context';

const Favourites = () => {
  const { state, setActiveNavlink }= useGlobalContext();
  
  useEffect(()=>{
    setActiveNavlink(3);
  }, []);

  return (
    <section className='favourites'>
      <div className="container favourites-container">
        <h2 className='heading'>All your favourites will appear here</h2>
      </div>
    </section>
  )
}

export default Favourites
