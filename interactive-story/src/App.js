import './App.css';
import Homepage from './components/homepage/home';
import { Routes, Route } from "react-router-dom"
import FAQ from './components/faq/faq';
import Contacts from './components/contact/contact';
import Stories from './components/stories/stories';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/FAQ' element={<FAQ />}/>
        <Route path='/Contacts' element={<Contacts />}/>
        <Route path='/Stories' element={<Stories />}/>
      </Routes>
    </div>
    
  )
}

export default App;
