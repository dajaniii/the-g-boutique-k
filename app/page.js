"use client"

import Header from './landing/Header'
import About from './landing/About'
import Bestsallers from './landing/Bestsallers'
import NewIn from './landing/NewIn'


export default function Home() {
  return (
    <div id="main">
      <Header></Header>
      <About></About>
      <Bestsallers></Bestsallers>
      <NewIn></NewIn>
    </div>
  );
}
