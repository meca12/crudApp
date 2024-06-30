import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { AddNewuser } from './assets/pages/addNewuser.tsx';
import { UserList } from './assets/pages/userList.tsx';

function App() {


  return (

    
 

    <Router>
        <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/users/new" element={<AddNewuser/>}/>
  </Routes>
    </Router>
  
  )
}

export default App
