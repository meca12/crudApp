import React, { useState } from 'react';

import { AppDispatch } from '../../store.ts';
import { addUser } from '../../features/userSlice.ts';
import { useDispatch } from 'react-redux';

const FormNewUser: React.FC = () => {
const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState('');  
    const [email, setEmail] = useState('');  
    const [gender, setGender] = useState('');  
  const [status, setStatus] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
       setName('');
      setEmail('');
      setGender('');
      setStatus('');
   
  };



  
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const userdata = {
      name: name,
      email: email,
      gender: gender, 
      status:status
      }
    
  try {
  
    await dispatch(addUser(userdata));
       setLoading(false);
      setOpen(false);
      setName('');
      setEmail('');
      setGender('');
      setStatus('');
   
    
    
  
   
  
}catch(error){
       setLoading(false);
      console.log(error);
    }
    
      
  };

   


  return (
      
      <div>
      <button
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={handleClickOpen}
      >
      Agregar usuario 
      </button>

      {open && (
   
         
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Agregar usuario</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  type="text"
                  id="name"
                placeholder="Tu nombre"
                value={name} onChange={(e)=>setName(e.target.value)} required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  type="email"
                  id="email"
                placeholder="Tu email"
                    value={email} onChange={(e)=>setEmail(e.target.value)} required
                />
            </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                  genero
                </label>
                 <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  type="text"
                  id="gender"
                placeholder="male or female"
                    value={gender} onChange={(e)=>setGender(e.target.value)} required
                />
            
            </div>
                 <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                  status
                </label>
   <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  type="text"
                  id="status"
                placeholder="active or inactive"
                    value={status} onChange={(e)=>setStatus(e.target.value)} required
                />
            
              </div>
              <div className="flex justify-end">
                 <button onClick= {handleClose } type="button"
                className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
                  Cancelar
                </button>
                <button
                  
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
                  {loading ? 'Guardando...' : 'Guardar'}
              </button>
               
              </div>
            </form>
          </div>
        </div>
      )}
    </div>





   
  ); 
}

export {FormNewUser}