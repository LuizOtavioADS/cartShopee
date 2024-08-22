//Casos de uso

//Add Item ✔
async function addItem(userCart, item) {
    userCart.push(item)
}

//Calc Total
async function calcTotal(userCart) {
    
    const result = userCart.reduce((total, item) => total  + item.subtotal(), 0); 
    console.log(result);
}

//Del Item
async function delItem(userCart, name) {
 0
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1); 
    }
    
}

//Remove Item
async function removeItem(userCart, item) {
    
    const indexFound = userCart.findIndex((p) =>  p.name === item);

    console.log('Item encontrado no index ' + indexFound);
    
    //Caso não encontre o item
    if (indexFound === -1){
        console.log('Item não encontrado');
        return;
    }

    //Item > 1 ~> subtrai 1
    if(userCart[indexFound].quant > 1){
        userCart[indexFound].quant -= 1;
        return;
    }  

    //item = 1 ~> deletar o item
    if(userCart[indexFound].quant == 1){
        userCart.splice(indexFound, 1);
        return;
    } 

}

async function displayCart(userCart) {

    console.log("Shopee Cart list:")
    userCart.forEach((item, index) => {

        console.log(`${index + 1}. ${item.name} - R$ ${item.price} ~ ${item.quant} ~ Subtotal ${item.subtotal()}`);

    });

}




export {
    addItem,
    calcTotal,
    delItem,
    removeItem,
    displayCart
}