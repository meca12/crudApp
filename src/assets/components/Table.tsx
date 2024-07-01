import "./stylescpnts.css"

import { faPencilAlt, faUser } from '@fortawesome/free-solid-svg-icons';

import { DeleteUser } from "./DeleteUser.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { UserModel } from "../utils/userInterface";
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useNavigate } from "react-router-dom";

interface DataTableProps {
    
    user: UserModel; 
        
    }
const DataTable:React.FC<DataTableProps> = ({ user }) => {
    library.add(fas, far);
    const navigate = useNavigate();
  
    return (

          <tr>
                        <td className="py-2 px-4 border-b border-gray-200">{user.id}</td>
         
                        <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{user.gender}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{user.status}</td>
            <td className="py-2 px-4 border-b border-gray-200"><FontAwesomeIcon   icon={faPencilAlt} className="cursors mr-2 ml-2 text-emerald-600 hover:text-emerald-500"  onClick={() => navigate(`/users/edit/${user.id}`)} /><FontAwesomeIcon icon={faUser} className="cursors mr-2 ml-2 text-slate-900 hover:text-slate-700"onClick={() => navigate(`/users/${user.id}`)} /><DeleteUser userId={user.id}/></td>
                        
          </tr>
       
      
)

}

export  {DataTable}