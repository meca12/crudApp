import { AppDispatch, RootState } from '../../store.ts';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {AddNewuser} from '../components/addNewuser.tsx';
import { DataTable } from '../components/Table.tsx';
import { TableBody } from '../components/TableBody.tsx';
import { fetchUsers } from '../../features/userSlice.ts';

const UserList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-between mt-4   mb-4">
        <h1 className="text-2xl font-bold">Registro de usuarios</h1>
        <div className="order-last ">
          <AddNewuser/>
        </div>
        
       
      </div>
      
      <TableBody>
        {users.map(user => (
           <DataTable key={user.id} user={user} ></DataTable>
        
        ))}</TableBody>
     
    

     
    </div>
    
  );
}

export { UserList };