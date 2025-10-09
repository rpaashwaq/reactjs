import axios from "axios";
import { Config } from "../helpers/constants";

function getAllProducts() {
    return axios.get(`${Config.BASEURL}/ProductApi/getall`)
        .then(resp => resp.data)
        .catch(err => {
            console.log('Error in fetching products');
            throw err;
        })
}

const getAllProductsAsync = async () => {
    try {
        const response = await axios.get(`${Config.BASEURL}/ProductApi/getall`)
        return response;
    }
    catch (err) {
        console.log('Error in fetching products');
        throw err;
    }
}

function addProduct(productToAdd) {
    return axios.post(`${Config.BASEURL}/ProductApi/add`, JSON.stringify(productToAdd), {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(resp => resp.data)
        .catch(err => {
            console.log('Error in adding products');
            throw err;
        })
}

function deleteProduct(id) {
    return axios.delete(`${Config.BASEURL}/ProductApi/delete/${id}`)
        .then(resp => resp.data)
        .catch(err => {
            console.log('Error in deleting products');
            throw err;
        })
}

const ProductService = {
    getAllProducts,
    addProduct,
    deleteProduct,
    getAllProductsAsync
}

export default ProductService;