import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { UserModel } from "../utils/userInterface";
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
// Añade los iconos a la librería
library.add(fas, far);
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
            <td className="py-2 px-4 border-b border-gray-200"><FontAwesomeIcon icon="fa-solid fa-pencil" /> <FontAwesomeIcon icon="fa-solid fa-trash" /><FontAwesomeIcon icon="fa-solid fa-user" /></td>
                        
          </tr>
       
      
)

}

export  {DataTable}