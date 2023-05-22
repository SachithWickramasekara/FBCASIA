import { Navbar ,Footer} from './layout/index';
import {Landing,AboutUs,Blogs,Career,Contact,FBCDifference, Services} from './pages/index';
import {Routes, Route} from 'react-router-dom';
import { routePaths } from './routes/routes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={routePaths.home}  element={<Landing/>}/>
        <Route path={routePaths.about}  element={ <AboutUs/>}/>
        <Route path={routePaths.blog}  element={<Blogs/>}/>
        <Route path={routePaths.Careers}  element={<Career/>}/>
        <Route path={routePaths.contact}  element={<Contact/>}/>
        <Route path={routePaths.FBC_Difference}  element={<FBCDifference/>}/>
        <Route path={routePaths.services}  element={<Services/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
