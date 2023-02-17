import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import {ToastContainer} from 'react-toastify'
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
<>
  <Router>
    <div className='container'>
      <Header/>
    <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <ToastContainer/>
    </div>
 
 
    </Router>
</>
 

  );
}

export default App;
