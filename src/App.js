import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from './components/partials/SharedLayout.jsx';
import ProtectedRoute from './components/partials/ProtectedRoute.jsx';
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Products from './components/pages/Products.jsx'
import SingleProduct from './components/pages/SingleProduct.jsx'
import Error from './components/pages/error/Error.jsx'

class App extends Component {
  state= {
    user: {
      userName: 'john',
      pass: '123456'
    }
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element= {<SharedLayout/>}>
              <Route index element= {<Home/>} />
              <Route path="about" element= {<About/>} />
              <Route path="contact" element= {<Contact/>} />
              <Route path="products" element= {
                <ProtectedRoute user= {this.state.user}>
                  <Products user= {this.state.user}/>
                </ProtectedRoute>
              } />
              <Route path="products/:productId" element= {<SingleProduct/>} />
              <Route path="*" element={<Error/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;


// 19. React Router 4 Crash Course -- react-router practice korechi ekhane.. follow korechi freecodecamp tutorial https://www.youtube.com/watch?v=59IXY5IDrBA&list=WL&index=1&t=1s

// What i learned -

// a. First Pages
// b. Page Components
// c. Link Component
// d. Error Page
// e. Navbar
// f. Nested Routes
// g. Shared Layout
// h. Index Pages
// i. NavLink Component
// j. URL Params
// k. Single Product
// l. useNavigate()
// m. Protected Route
// n. Refactor
