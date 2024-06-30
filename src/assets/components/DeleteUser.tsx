import "./stylescpnts.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { deleteUser } from "../../features/userSlice";
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useAppDispatch } from "../../hooks";

const DeleteUser: React.FC<{userId:number}> = ({userId}) => {
   const dispatch = useAppDispatch();
    library.add(fas, far);
    
    
   

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };
    return (
      
        <>
        <FontAwesomeIcon onClick={() => handleDelete(userId)} icon="fa-solid fa-trash" className="cursors"/>
        </>
    )
}
export {DeleteUser}
