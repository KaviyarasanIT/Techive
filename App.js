import './App.css';
import Home from './components/Home';
import Bikes from './components/Bikes';
import NewUser from './components/AddBikes';
import Layout from './components/Layout';
import Update from './components/Update';
import Studentlist from './components/Bikestlist';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/Home' element={<Home />} />
            <Route path='/Bikes' element={<Bikes/>} />
            <Route path='/AddBikes' element={<NewUser/>} />
            <Route path='/Studentlist' element={<Studentlist/>} />
            <Route path='/Search' element={<Search/>}/>
          </Route>
          <Route path='/Update/:id' element={<Update />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;