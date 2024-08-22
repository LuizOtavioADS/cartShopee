import createItem from "./services/itens.js";
import * as cartService from "./services/cart.js";

const myCart = []

// Create two itens 
const item1 = await createItem("Mouse", 70, 3);
const item2 = await createItem("Teclado", 100.99, 1);

// Add two itens in cart
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item1.name);  

await cartService.displayCart(myCart);

// Del one item to cart
//await cartService.delItem(myCart, item2.name);

await cartService.calcTotal(myCart);


