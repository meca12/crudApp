import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { UserDetails } from './assets/pages/userDetail.tsx';
import { UserForm } from './assets/pages/userForm.tsx';
import { UserList } from './assets/pages/userList.tsx';

function App() {


  return (

    
 

    <Router>
        <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/users/:id" element={<UserDetails/>}/>
        <Route path="/users/new" element={<UserForm />} />
        <Route path="/users/edit/:id" element={<UserForm />} />
        </Routes>
    </Router>
  
  )
}

export default App
