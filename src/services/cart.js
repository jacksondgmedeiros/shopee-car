// adicionar um produto ao carrinho


    // A função addItem recebe o carrinho do usuário e um item, 
    // e adiciona esse item ao carrinho usando o método push. O método push é uma função de array
    //  que adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
    //  Neste caso, estamos adicionando o item ao final do array userCart, 
    // que representa o carrinho de compras do usuário.
async function addItem(userCart, item) {

    userCart.push(item);
    
}

// remover um produto do carrinho

async function removeItem(userCart, name) {

}

// deletando o carrinho inteiro

async function deleteCart(userCart, index) {

}

// total do carrinho
async function totalCart(userCart) {
    //aplica o total do carrinho usando o método reduce, que é uma função de array que executa
    //  uma função de redução em cada elemento do array, resultando em um único valor.
    return userCart.reduce((total, item) => total + item.subTotal(), 0);

    //explique o reduce: O método reduce é usado para calcular o total do carrinho. 
    // Ele itera sobre cada item no array userCart e acumula o valor total. 
    // A função de redução recebe dois argumentos: total, que é o valor acumulado até o momento,
    //  e item, que é o item atual sendo processado. 
    // A função retorna a soma do total acumulado e o subtotal do item atual 
    // (calculado usando item.subTotal()). 
    // O segundo argumento do reduce (0) é o valor inicial do total, ou seja, o total começa em 0 
    // antes de processar os itens do carrinho.
}

// exportar as funções
export { addItem, removeItem, deleteCart, totalCart };