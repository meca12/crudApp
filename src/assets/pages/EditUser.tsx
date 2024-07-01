import { AppDispatch, RootState } from "../../store.ts";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import { FormEdit } from "../components/FormEdit.tsx";
import {User} from "../../features/userSlice.ts";
import { getUserfor } from "../../features/userSlice.ts";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";

const EditUser: React.FC= () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const currentUser = useAppSelector((state: RootState) =>
    state.users.users.find((user) => user.id === Number(id))
  );
  const [user,setUser] = useState<User | null>(currentUser || null);
 
   useEffect(() => {
   
       if (!currentUser && id) {
      dispatch(getUserfor(Number(id)));
    }
  }, [dispatch, id, currentUser]);

 

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  if (!user) {
    return <div>Loading...</div>;
  }

 
  if (!user) {
    return null;
  }

 
  return (
    <>
      <div className="container mx-auto">
      <div className="flex justify-between mt-4   mb-4">
        <h1 className="text-2xl font-bold">Editar usuario</h1>
        <button
            className="px-4 py-2 font-semibold text-sky-600 bg-white border rounded border-sky-600 hover:bg-sky-600 hover:text-white"
            onClick={() => navigate('/')}
      >
      Regresar 
      </button>
       
      </div>
      <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-sky-600 border border-sky-600">
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-50">Id</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-50">Nombre</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-50">Email</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-50">Genero</th>
                                                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-50">Estatus</th>
                                    <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-50">Acciones</th>
          </tr>
        </thead>
             <tbody>
                   <tr>
                        <td className="py-2 px-4 border-b border-gray-200">{user.id}</td>
         
                        <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{user.gender}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{user.status}</td>
            <td className="py-2 px-4 border-b border-gray-200"><FormEdit userId={user.id}/></td>
                        
          </tr>

         </tbody>
                </table>
            </div>
     
     
    

     
    </div>
    </>
  
  )
}

export { EditUser };