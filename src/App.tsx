import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { DetailsUser } from './assets/pages/DetailsUser.tsx';
import { EditUser } from './assets/pages/EditUser.tsx';
import { UserList } from './assets/pages/index.tsx';

function App() {


  return (

    
 

    <Router>
        <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/users/:id" element={<DetailsUser />} />
       
  </Routes>
    </Router>
  
  )
}

export default App
