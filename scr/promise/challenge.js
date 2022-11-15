import fetch from "node-fetch"; 

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi);
}

// fetchData(`${API}/products`)
// .then(response => response.json())
// .then(products =>{
//     console.log(products);
// })
// .catch(error => console.log(error))

fetchData(`${API}/products`)
.then(response => response.json())
.then(productos => {
    return fetchData(`${API}/products/${productos[0].id}`)
})
.then(response => response.json())
.then(producto => {
    return fetchData(`${API}/categories/${producto.category.id}`)
})
.then(response => response.json())
.then(category => console.log(category.name))
.catch(error => console.error(error))
.finally(()=>console.log('Finally'))