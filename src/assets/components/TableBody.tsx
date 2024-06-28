import React, { ReactNode } from 'react';

interface TableBodyProps{
    children: ReactNode;
}

const TableBody: React.FC<TableBodyProps> = (props) => {
   
    return(<div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Id</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Nombre</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Email</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Genero</th>
                                                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Estatus</th>
                                    <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Acciones</th>
          </tr>
        </thead>
             <tbody>
                 {props.children}

         </tbody>
                </table>
            </div>
    ) 


}



export {TableBody}