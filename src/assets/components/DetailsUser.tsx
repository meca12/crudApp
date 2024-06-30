import "./stylescpnts.css";

import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RootState } from "../../store";
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { getUserfor } from "../../features/userSlice";
import { library } from '@fortawesome/fontawesome-svg-core';

const DetailsUser: React.FC<{userId:number}> = ({userId}) => {
const dispatch = useAppDispatch();
    library.add(fas, far);
      const user = useAppSelector((state: RootState) =>
    state.users.users.find((user) => user.id === userId)
      );
    
    
  const [name, setName] = useState(user?.name );
  const [email, setEmail] = useState(user?.email);
  const [gender, setGender] = useState(user?.gender);
    const [status, setStatus] = useState(user?.status);
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        if (!user) {
            dispatch(getUserfor(userId));
      }  
        
    }, [dispatch, userId, user])
    
    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email); 
            setGender(user.gender); 
            setStatus(user.status);
        }
    }, [user])
    

 
       const handleClickOpen = () => {
           setOpen(true);
           
           console.log(userId);
   };
  
  
   const handleClose = () => {
    setOpen(false);
     };

    
    return (

        <>
            <FontAwesomeIcon onClick={handleClickOpen} icon="fa-solid fa-user" className="cursors"/>
     {open && (
   <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Detalles de usuario</h2>
            <form >
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
                 readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  type="email" id="email" value={email} readOnly/>
            </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                  genero
                </label>
                 <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    type="text" id="gender" value={gender} readOnly />
                            </div>
                 <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                  status
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  type="text" value={status} id="status" readOnly/>
            </div>
              <div className="flex justify-end">
                 <button onClick= {handleClose } type="button"
                className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
                  Cerrar
                </button>
               
               
              </div>
            </form>
          </div>
        </div>
      )}
     
     
     
     </>
    )
    
}

export {DetailsUser}