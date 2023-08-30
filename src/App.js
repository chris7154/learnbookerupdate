import './App.css';
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import About from "./components/about/About"





function App () {
  return (
    <>
      
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;