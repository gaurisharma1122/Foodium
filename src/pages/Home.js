import React from 'react'
import { useGlobalContext } from '../context/context';
import { useEffect } from 'react';
import Hero from '../components/hero/Hero';

const Home = () => {
  const { state, setActiveNavlink } = useGlobalContext();

  useEffect(() => {
    setActiveNavlink(1);
  }, []);

  return (
  <section className='home'>
    <Hero/>
  </section>
  )
}

export default Home
