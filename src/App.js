import { BrowserRouter, Link, Match } from 'react-router'
import React from 'react'

const Home = () => <p>This is the home page</p>

const Simple = () => <p>This is rendered simply</p>

const App = () =>
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Simple'>Simple</Link>
          </li>
        </ul>
      </nav>
      <Match exactly pattern='/' component={ Home } />
      <Match pattern='/simple' component={ Simple } />
    </div>
  </BrowserRouter>

export default App
