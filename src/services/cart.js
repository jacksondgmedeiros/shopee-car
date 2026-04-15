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

async function removeItem(userCart, index) {
    // const deletedItem = index - 1; // Ajusta o índice para corresponder à posição correta no array (índice começa em 0)
    // console.log('Índice a ser removido:', deletedItem); // Adicione esta linha para verificar o índice a ser removido
    // // a função deve remover a quantidade do item no índice, se tem 2, ele diminui para 1, se tem 1, ele remove o item do carrinho
    // if (deletedItem >= 0 && deletedItem < userCart.length) {
    //     userCart.splice(deletedItem, 1); // O método splice é usado para remover o item do carrinho.
    //     //  Ele recebe dois argumentos: o índice do elemento a ser removido e o número de elementos a
    //     //  serem removidos (neste caso, 1).
    //     console.log(`Item no índice ${index} removido do carrinho.`);
    // }

    const indexFFound = userCart.findIndex((i) => i.name === index.name);

    if (indexFFound == -1) {
        console.log(`Item "${index.name}" não encontrado no carrinho.`);
        return
    }

    if (userCart[indexFFound].quantity > 1) {
        userCart[indexFFound].quantity -= 1;
        console.log(`Quantidade do item "${index.name}" reduzida para ${userCart[indexFFound].quantity}.`);

    }else {
        deleteCart(userCart, index.name);
        console.log(`Item "${index.name}" removido do carrinho.`);
    }
}

// deletando o carrinho inteiro

async function deleteCart(userCart, name) {
    //explique a função deleteCart: A função deleteCart recebe o carrinho do usuário e um índice,
    //  e remove o item no índice especificado usando o método splice. O método splice é uma função de array
    //  que altera o conteúdo de um array, removendo ou substituindo elementos existentes e/ou adicionando
    //  novos elementos. o splice recebe dois argumentos: o índice do elemento a ser removido
    //  e o número de elementos a serem removidos. o findIndex é usado para encontrar o índice do item
    //  no carrinho com base no nome do item. ele retorna o número -1 se o item não for encontrado, 
    // ou o índice do item se ele for encontrado.
    const index = userCart.findIndex((item) => item.name === name);
    console.log('Index encontrado:', index); // Adicione esta linha para verificar o índice encontrado
    if (index !== -1) {
        userCart.splice(index, 1);
        console.log(`Item "${name}" removido do carrinho.`);
    } else {
        console.log(`Item "${name}" não encontrado no carrinho.`);
    }
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

//função para exibir o carrinho com detalhes, não em formato de array, mas sim listando os itens e seus detalhes
async function showCart(userCart) {
    console.log('Carrinho:');
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)} |
         ${item.quantity} | Subtotal: R$ ${item.subTotal().toFixed(2)}`);
    });
}


// exportar as funções
export { addItem, removeItem, deleteCart, totalCart, showCart };