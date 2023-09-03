import React, { useCallback } from 'react';
import { useCart } from '../../store/reducer';

export const DataRow = ({ item }) => {
    const { cart,dispatch } = useCart();
    const columns = [` ${item.D} ${item.DAY} ${item.LN}`, 'Yorumlar', ' ','1', 'x', '2', 'Alt', 'Üst', 'H1', '1', 'x', '2', 'H2', '1-X', '1-2', 'X-2', 'Var', 'Yok', '+99'];
    
    //arka plan rengi için, cart objesinde tıklanılan maç var mı yok mu kontrolü yapılıyor.
    const isInCart = (id, variable) => {
        return cart.some(i => i.id === id && i.value === variable);
    }

    const handleClick = useCallback((item, variable) => {
        const sameIdsameValue = cart.some(i => i.id === item.C && i.value === variable);
        const sameId = cart.find(i => i.id === item.C);

        if (sameIdsameValue) { // seçili olan maç, cart objesinde varsa remove et 
            dispatch({ type: 'REMOVE_ITEM', id: item.C, variable });
        } else if (sameId) { // seçili olan maç ile aynı id'de başka maç varsa o maçı sil seçili olan maçı ekle. 
            dispatch({ type: 'REMOVE_ITEM', id: item.C, variable: sameId.value });
            dispatch({ type: 'ADD_ITEM', item, variable });
        } else { // sepette aynı id ve oranda maç yoksa sepete ekle
            dispatch({ type: 'ADD_ITEM', item, variable });
        }
    }, [cart, dispatch]);

    return (
        <>
        <tr>
            {columns.map(column => <th>{column}</th>)}
        </tr>
     
        <tr>
        <td><b>{item.C}</b> {item.T} {item.N}</td>
        <td>Yorumlar</td>
        <td>{item.OCG[1].OC[1].MBS}</td> 
        <td  onClick={()=>handleClick(item,item.OCG[1].OC[0].O)} style={{ backgroundColor: isInCart(item.C, item.OCG[1].OC[0].O) ? 'yellow' : 'transparent' }}>{item.OCG[1].OC[0].O}</td>
        <td onClick={()=>handleClick(item,item.OCG[1].OC[1].O)}  style={{ backgroundColor: isInCart(item.C, item.OCG[1].OC[1].O) ? 'yellow' : 'transparent' }}> {item.OCG[1].OC[1].O}</td>
        <td> </td>
        <td onClick={()=>handleClick(item,item.OCG[5].OC[25].O)}  style={{ backgroundColor: isInCart(item.C, item.OCG[5].OC[25].O) ? 'yellow' : 'transparent' }}>{item.OCG[5].OC[25].O}</td>
        <td onClick={()=>handleClick(item,item.OCG[5].OC[26].O)}  style={{ backgroundColor: isInCart(item.C, item.OCG[5].OC[26].O) ? 'yellow' : 'transparent' }}>{item.OCG[5].OC[26].O}</td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td onClick={()=>handleClick(item,item.OCG[2].OC[3].O)} style={{ backgroundColor: isInCart(item.C, item.OCG[2].OC[3].O) ? 'yellow' : 'transparent' }}>{item.OCG[2].OC[3].O}</td>
        <td onClick={()=>handleClick(item,item.OCG[2].OC[4].O)} style={{ backgroundColor: isInCart(item.C, item.OCG[2].OC[4].O) ? 'yellow' : 'transparent' }}>{item.OCG[2].OC[4].O}</td>
        <td onClick={()=>handleClick(item,item.OCG[2].OC[5].O)} style={{ backgroundColor: isInCart(item.C, item.OCG[2].OC[5].O) ? 'yellow' : 'transparent' }}>{item.OCG[2].OC[5].O}</td>
        <td> </td>
        <td> </td>
        <td>3</td>

    </tr>
       
    </>
   
    );
};
