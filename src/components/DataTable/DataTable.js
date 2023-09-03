import React from 'react';
import {DataRow} from './DataRow';

//Gereksiz render durumları için REact.memo
export const  DataTable = React.memo(({ data }) => {
    const columns = [`Event Count: ${data?.length || 0}`, 'Yorumlar', ' ', '1', 'x', '2', 'Alt', 'Üst', 'H1', '1', 'x', '2', 'H2', '1-X', '1-2', 'X-2', 'Var', 'Yok', '+99'];
    
    return (
        <table>
            <thead>
                <tr className='firstRow'>
                    {columns.map(column => <th>{column}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <DataRow key={item.id} item={item} />
                ))}
            </tbody>
        </table>
    );
});
