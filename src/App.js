import { React, useEffect } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import ReactGa from 'react-ga'

import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

ReactGa.initialize(`${process.env.REACT_APP_GA_TRACKING_ID}`, { debug: true })

function App() {
  useEffect(() => {
    // var host = window.location.hostname
    // if (host !== 'localhost')
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

/* ROUTER EXPLAINED 
      ----------------------
      --> Route will now help us to establish the link between component’s UI(element prop) and the URL(path).
      --> By default, Route is inclusive which means more than one Route component can match the URL path and render at the same time. 
      If we want to render a single component, we need to use Routes. Our application can have mutliple routes

      INDEX: 
      Determines if the route is an index route. 
      Index routes render into their parent's Outlet at their parent's URL (like a default child route).
      */

/*
      <BrowseRouter>
        <div className="">
          <Link to=""> </Link>
        </div>

        <Routes>
          <Route path="" element=""></Route> --> The first <Route> has a path of "/" and renders the Layout component.
          <Route></Route>
          <Route></Route>
        </Routes>      
      </BrowseRouter>
      
       */

export default App
