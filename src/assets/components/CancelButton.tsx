import React from 'react';
import { useNavigate } from 'react-router-dom';

const CancelButton: React.FC = () => {
    const navigate = useNavigate();
const handleCancel = () => {
        navigate("/");
        
    }
    return (
      <button onClick= {handleCancel} type="button"
                  className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                 
                >
                  Cancelar
                </button>

    )
}
export { CancelButton };