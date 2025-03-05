import React from 'react'

import About from './components/About/About.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Footer from './components/Footer/Footer.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Itinerary from './components/Itinerary/Itinerary.jsx'

import './assets/global.scss'

const App = () => {
  return (
    <>
      <Header />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="itinerary"><Itinerary /></section>
      <section id="gallery"><Gallery /></section>
      <section id="contacts"><Contacts /></section>
      <Footer />
    </>
  );
};

export default App;
