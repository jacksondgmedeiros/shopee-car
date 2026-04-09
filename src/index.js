//importar o item
import createItem from './services/item.js';

const cart = [];

//mensagem de bem vido ao carrinho
console.log('Bem-vindo ao carrinho de compras!');

//adicionar um item ao carrinho
const item1 = await createItem('Camiseta', 50, 2);

const item2 = await createItem('Short', 70, 1);


//exibir o subtotal do item adicionado
console.log(`Subtotal do item: R$ ${item1.subTotal()}`);