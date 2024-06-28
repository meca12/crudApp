import { AppDispatch, RootState } from '../../store';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DataTable } from '../components/Table.tsx';
import { TableBody } from '../components/TableBody.tsx';
//import { Link } from 'react-router-dom';
import { fetchUsers } from '../../features/userSlice';

const UserList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">User List</h1>
      <TableBody>
        {users.map(user => (
           <DataTable key={user.id} user={user} ></DataTable>
        
        ))}</TableBody>
     
    

     
    </div>
    
  );
}

export { UserList };