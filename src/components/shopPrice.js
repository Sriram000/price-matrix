const minimumStyle = {
    color: 'green',
    fontWeight: 'bold',
};
const maximumStyle = {
    color: 'red',
    fontWeight: 'bold',
};
const defaultStyle = {
    background: 'lightgrey',
};

const ShopPrice = function(data) {

    const {price, minimum, maximum} = data;
    const style = minimum ? minimumStyle : (maximum ? maximumStyle : defaultStyle);
    console.log(minimum, maximum, style);

    return (
        <td style={ style }>{ price }</td>
    )
}

export default ShopPrice;