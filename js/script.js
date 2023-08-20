const productList = document.querySelector('.productList');

const loader = document.querySelector('.loader');

const searchField = document.querySelector('#search'); 

searchField.addEventListener('input',(e)=>{
    console.log(e);
})

const displayProducts = async () => {
    const products = await fetchProducts();
    //hide the loader
    loader.style.display = "none";

    products.forEach((productData)=>{
        const product = createProduct(productData);
        productList.appendChild(product);
    })
}

function createProduct(productData){
    const product = document.createElement('div');
    product.className = 'product'; 
    
    const productImage = document.createElement('div');
    productImage.className = "productImage";

    const productDetails = document.createElement('div');
    productDetails.className = "productDetails";

    const  img = document.createElement('img');
    img.setAttribute("src", productData.thumbnail);
    img.setAttribute("height", "100%");
    img.setAttribute("width", "100%");

    productImage.appendChild(img);

    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const h5 = document.createElement("h5");
    const span = document.createElement("span");

    h3.innerText = productData.title;
    p.innerText = productData.description;
    span.innerText = productData.rating;
    h5.innerText = "₹" + productData.price;

    productDetails.append(h3);
    productDetails.append(p);
    productDetails.append(span);
    productDetails.append(h5);

    product.appendChild(productImage);
    product.appendChild(productDetails);

    return product;

}

const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const productsJSON = await response.json();
    return productsJSON.products;
}

displayProducts();

