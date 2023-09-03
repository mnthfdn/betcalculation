import React from 'react';

export const  CartItem = ({ item }) => {
    return (
        <div className='cartItem'>
            4 Kod:  {item.id} Maç:  {item.match} <b>Oran: {item.value}</b>
        </div>
    );
};
