//importar o item
import createItem from './services/item.js';

//importar as funções do carrinho
import * as cart from './services/cart.js';

const myCart = [];
const myWhishlist = [];
let valorTotal = 0;

//mensagem de bem vido ao carrinho
console.log('Bem-vindo ao carrinho de compras!');

//adicionar um item ao carrinho
const item1 = await createItem('Camiseta', 50, 2);

const item2 = await createItem('Short', 70, 1);

await cart.addItem(myCart, item1);
await cart.addItem(myCart, item2);


//exibir o carrinho
await cart.showCart(myCart);
valorTotal = await cart.totalCart(myCart);
console.log('Valor total:', valorTotal);

//exibir a whishlist
console.log('Whishlist:', myWhishlist);

//deletar um item do carrinho
// await cart.deleteCart(myCart, 'camisa');


// //exibir o total do carrinho

// await cart.showCart(myCart);
// valorTotal = await cart.totalCart(myCart);
// console.log(`Total do carrinho atualizado: R$ ${valorTotal}`);

//remover um item do carrinho
await cart.removeItem(myCart, item1);



// await cart.deleteCart(myCart, 'Short');

// //exibir o total do carrinho
// valorTotal = await cart.totalCart(myCart);
// console.log(`Total do carrinho: R$ ${valorTotal}`);

await cart.showCart(myCart);
