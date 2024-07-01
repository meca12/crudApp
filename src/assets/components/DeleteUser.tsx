import "./stylescpnts.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { deleteUser } from "../../features/userSlice";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useAppDispatch } from "../../hooks";

const DeleteUser: React.FC<{userId:number}> = ({userId}) => {
  const dispatch = useAppDispatch();
      const [open, setOpen] = React.useState(false);
    library.add(fas, far);
    
    
     const handleClickOpen = () => {
    setOpen(true);
   };
  
  
   const handleClose = () => {
    setOpen(false);
     };

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };
    return (
      
        <>
        <FontAwesomeIcon onClick={handleClickOpen}   icon={faTrash} className="cursors mr-2 ml-2 text-red-600 hover:text-red-500" />
    
    {open && (    

 <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
           <article className="text-wrap mb-4 mt-4">
  <h2 className="text-center">Este usuario sera eliminado </h2>
  <p className="text-center">¿Desea continuar? </p>
</article>
              <div className="flex justify-center">
                 <button onClick= {handleClose } type="button"
                className="px-4 py-2 mr-2 text-gray-50 bg-stone-900 rounded hover:bg-stone-800">
                  Cancelar
                </button>
                <button
                  onClick={() => handleDelete(userId)} 
                  type="submit"
                 className="px-4 py-2 text-white bg-sky-600 rounded hover:bg-sky-500">
                  Aceptar
              </button>
               
              </div>
          
          </div>
        </div>
  )}
        
        </>
    )
}
export {DeleteUser}
