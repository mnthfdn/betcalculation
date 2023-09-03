import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};
//reducer
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, { id: action.item.C, value: action.variable ,match:action.item.N}];
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.id || item.value !== action.variable);
        default:
            return state;
    }
};

const initialState = [];

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState);
    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};