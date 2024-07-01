import React, { ReactNode } from 'react';

interface TableBodyProps{
    children: ReactNode;
}

const TableBody: React.FC<TableBodyProps> = (props) => {
   
    return(<div className="overflow-x-auto">
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
                 {props.children}

         </tbody>
                </table>
            </div>
    ) 


}



export {TableBody}