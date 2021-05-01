import ItemPrice from './itemPrice';
import ShopName from './shopName';

const style = {
    margin: "10px",
    border: "1px solid grey",
};

const PriceList = function(data) {
    const { items, shopNames } = data;
    
    return (
        <table style={ style }>
            <tr>
                <th>Items</th>
                {shopNames.map(ShopName)}
            </tr>
            {items.map(ItemPrice)}
            
        </table>
    )
}

export default PriceList;