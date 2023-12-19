
import Login from './components/login/Login';
import {Routes,Route} from 'react-router-dom'
import HomePage from './components/Homepage/HomePage'
import PrivateRoute from './components/privateroute/PrivateRoute';
import Register2 from './components/register/Register2';
import Dorra from './components/Dorra/Dorra';
import Admin from './components/Admin/Admin';
import AjoutStatdium from './components/Admin/zidenkeryet/AjoutStadium/AjoutStatdium';
import UpdateStadium from './components/Admin/zidenkeryet/UpdateStadium/UpdateStadium'
import AddPro from './components/Admin/AddingProduct/AddPro';
import ListProduits from './components/Admin/zidenkeryet/Cards/ListProduits/ListProduits';
function App() {
  return (
    <div >
     <Routes>
      <Route path='/' element ={<HomePage/>}/>
      <Route path='/dorra' element ={<Dorra/>}/>
      <Route path='/register' element = {<Register2/>}/>
      <Route path='/login' element = {<Login/>}/>


      <Route path='/produit/:id' element = {<Admin/>}>
{/* <Route path="produit" element={<ListProduits/>}/>
 */}        </Route>


    <Route path='/app/privateRoute' element = {<PrivateRoute/>}>
{/*     <Route path="produit/:id" element={<ListProduits/>}/>
 */}      </Route> 
  
    <Route path='/zidstadium' element = {<AjoutStatdium/>}/> 
    <Route path='/zidstadium/:id' element = {<UpdateStadium/>}/> 
    <Route path='/adding' element = {<AddPro/>}/>
    <Route path='/adding' element = {<AddPro/>}/>

     </Routes>


    </div>
  );
}

export default App;
