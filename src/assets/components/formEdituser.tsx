import "./stylescpnts.css"

import React,{useEffect, useState}  from "react";
import { getUserfor, updateUser } from "../../features/userSlice";
import { useAppDispatch, useAppSelector } from '../../hooks.ts';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RootState } from "../../store.ts";
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const FormEdit: React.FC<{userId:number}> =({userId}) => {
  const dispatch = useAppDispatch();
  library.add(fas, far);

  const user = useAppSelector((state: RootState) =>
    state.users.users.find((user) => user.id === userId)
  );

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [gender, setGender] = useState(user?.gender || '');
  const [status, setStatus] = useState(user?.status || '');
    const [open, setOpen] = React.useState(false);
 useEffect(() => {
    if (!user) {
      dispatch(getUserfor(userId));
    }
  }, [dispatch, userId, user]);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setGender(user.gender);
      setStatus(user.status);
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      await dispatch(
        updateUser({ id: user!.id, user: { name, email, gender, status } })
      ).unwrap();

      setOpen(false);
      
      
    } catch (error) {
      console.log('Failed to update user');
    }
  };

  
   const handleClickOpen = () => {
    setOpen(true);
   };
  
  
   const handleClose = () => {
    setOpen(false);
     };

    
      
  

    return (
        <>
<FontAwesomeIcon onClick={handleClickOpen} icon="fa-solid fa-pencil" className="cursors" />
{open && (
   <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Editar usuario</h2>
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
                       value={name}
                     onChange={(e) => setName(e.target.value)}
                 required
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
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    required
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
                    value={gender}
                     onChange={(e) => setGender(e.target.value)}
                     required
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
                     value={status}
                     onChange={(e) => setStatus(e.target.value)}
                    required
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
                  guardar
              </button>
               
              </div>
            </form>
          </div>
        </div>
      )}
    </>
    
        
    
    
    )
    
}

export {FormEdit}