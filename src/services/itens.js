//Criar item com subtotal correto
async function createItem(name, price, quant) {
    return {
        name,
        price,
        quant,
        subtotal: () => price * quant, 
    }
}

export default createItem;