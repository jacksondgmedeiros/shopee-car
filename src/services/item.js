// criar item
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subTotal: () => price * quantity,
    };

    
}

//exportar função por default
export default createItem;