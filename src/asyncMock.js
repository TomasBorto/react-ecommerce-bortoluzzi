const products = [
    { 
        id: '1', 
        name: 'Alimento Old Prince Novel Cordero y Arroz para perro 18kg', 
        price: 10000, 
        category: 'alimento', 
        img:'https://puppis.vteximg.com.br/arquivos/ids/186507-1000-1000/148052.jpg?v=637871009908500000', 
        stock: 25, 
        description:'Alimento saludable'
    },
    { id: '2', name: 'Alimento Excellent Pollo Y Arroz para Gato - 7,5 Kg', price: 8600, category: 'alimento', img:'https://puppis.vteximg.com.br/arquivos/ids/167612-1000-1000/150018.jpg?v=637021782919930000', stock: 16, description:'Alimento nutritivo para gatos'},
    { id: '3', name: 'Pelota de Fútbol Puppis de Vinilo', price: 1200, category: 'juguete', img:'https://puppis.vteximg.com.br/arquivos/ids/186289-1000-1000/269253.jpg?v=637854765694100000', stock: 10, description:'Pelota para perros'},
    { id: '4', name: 'Moisés Puppis Gordo Reversible Inglés - 55x55 Cm', price: 6300, category: 'cama', img:'https://puppis.vteximg.com.br/arquivos/ids/187887-1000-1000/269391.jpg?v=637931452435570000', stock: 10, description:'Cama para perros'},
    { id: '5', name: 'Juguete M-Pets Hueso Ecológico - L', price: 3200, category: 'juguete', img:'https://puppis.vteximg.com.br/arquivos/ids/183219-1000-1000/237721.jpg?v=637698190480230000', stock: 10, description:'Hueso para perros'}
]


export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}