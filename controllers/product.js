import Product from '../models/products'

const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" }
]

export const ListProduct = (request, response) => {
    response.json(products);
};

export const ListProductDetail = (request, response) => {
    const product = products.find(item => item.id === +request.params.id)
    response.json(product);
};

export const AddProduct = (request, response) => {
    products.push(request.body)
    response.json(products);
};
export const DeleteProduct = (request, response) => {
    const product = products.filter(item => item.id != +request.params.id)
    response.json(product);
};
export const UpdateProduct = (request, response) => {
    response.json(products.map(item => item.id === +request.params.id ? request.body : item));
};