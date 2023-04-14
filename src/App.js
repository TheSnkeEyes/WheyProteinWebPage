
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Bottom_main from './components/Bottom_main'; 
import { Route, Routes } from 'react-router-dom';
import Suplemments from './pages/Suplemments';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path='supplements' element={<Suplemments />}/>
          <Route path='contact' element={<Contact />}/>
  
        </Route>
      </Routes>
      <Main/>
      <Bottom_main/>
    </>
  );
}

export default App;
