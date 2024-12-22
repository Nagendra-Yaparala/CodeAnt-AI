import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Repositories from './Components/Repositories';
import Aicodereview from './Components/Aicodereview';
import Cloudsecurity from './Components/Cloudsecurity';
import Howtouse from './Components/Howtouse';
import Settings from './Components/Settings';
import Support from './Components/Support';

function App() {
  const Layout = ()=>{
    return (<>
      <Dashboard/>
    </>)
  }

  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Layout/>}>
          <Route path='/dashboard/repositories' element={<Repositories/>}/>
          <Route path='/dashboard/codereview' element={<Aicodereview/>}/>
          <Route path='/dashboard/cloudsecurity' element={<Cloudsecurity/>}/>
          <Route path='/dashboard/howtouse' element={<Howtouse/>}/>
          <Route path='/dashboard/settings' element={<Settings/>}/>
          <Route path='/dashboard/support' element={<Support/>}/>
      </Route>
      
     </Routes>
    </div>
  );
}

export default App;
