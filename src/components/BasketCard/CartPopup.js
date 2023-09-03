import React from 'react';
import {CartItem} from './CartItem';
import { useCart } from '../../store/reducer';

export const  Cart = () => {
    const { cart } = useCart();

    // toplam tutar hesaplama
    const cartCost=cart.reduce((multi, item) => multi * parseFloat(item.value), 1) 
    const totalAmount= cartCost === 1 ? 0: cartCost.toFixed(2);

    return (
        <div className='basketCard'>
            {cart.map(item => (
                <>
                <CartItem key={item.id} item={item} />
                <hr/>
                </>
            ))} 
            
            <b>Toplam Tutar: {totalAmount} TL</b>
        </div>
    );
};