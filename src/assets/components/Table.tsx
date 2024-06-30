import { DeleteUser } from './DeleteUser.tsx';
import { DetailsUser } from './DetailsUser.tsx';
import { FormEdit } from './formEdituser.tsx';
import React from "react";
import { UserModel } from "../utils/userInterface";

interface DataTableProps {
    user: UserModel; 
        
    }
const DataTable:React.FC<DataTableProps> = ({ user }) => {
    
   
    return (

          <tr>
                        <td className="py-2 px-4 border-b border-gray-200">{user.id}</td>
         
                        <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{user.gender}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{user.status}</td>
            <td className="py-2 px-4 border-b border-gray-200"><FormEdit userId={user.id} /><DetailsUser userId={user.id}/><DeleteUser userId={user.id}/></td>
                        
          </tr>
       
      
)

}

export  {DataTable}