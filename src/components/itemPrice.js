import ShopPrice from "./shopPrice";

const style = {
    fontWeight: 'bold',
};

const ItemPrice = function(data) {
    const {name, shopPrices} = data;
       
    return (
        <tr>
             <td style={ style }>{name}</td>
             {shopPrices.map(ShopPrice)}
        </tr>
    )
}

export default ItemPrice;