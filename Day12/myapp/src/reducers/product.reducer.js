import { createReducer } from "@reduxjs/toolkit"
import { ADDPRODUCT, FILTERPRODUCT } from "../actions/product.actions"
import { productList } from "../data/data"

const initialState = {
    products: [...productList],
    filteredProducts: [],
    message: ""
}


const productReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(FILTERPRODUCT, (state, action) => {
        console.log("action payload (seelctedcategory)" + action.payload);
        state.filteredProducts = action.payload ? state.products.filter(f=>f.category == action.payload) : state.products;
    })
    .addCase(ADDPRODUCT, (state, action) => {

    })
})

export default productReducer;