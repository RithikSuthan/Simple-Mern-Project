import {React,Component} from 'react';
import './NavBar.css';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Book from './Book';
import Home from './Home';


class NavBar extends Component{
    render()
    {
        return(
          <body>
          <ul class="topnav">
  <li><a class="active" href="/">Home</a></li>
  <li><a href="book">Train Details</a></li>
</ul>

        <BrowserRouter>
          <Routes> <Route  path="/" index element={<Home />} /></Routes>
          <Routes><Route path="book" element={<Book />} /></Routes>
         </BrowserRouter>
          </body>
            
        )
    }
}

export default NavBar;