import { createReducer } from "@reduxjs/toolkit"
import { ProductAction } from "../actions/product.actions"
import { productList } from "../data/data"

const initialState = {
    products: [...productList],
    filteredProducts: [],
    filteredCount: 0,
    selectCategory: "",
    searchText: ""
}


const productReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ProductAction.FilterProduct, (state, action) => {
            const { searchText, selectCategory, products } = state;
            const filtered = products.filter(prod => {
                const checkProductName = searchText !== "" ? 
                prod.productName.toLowerCase().includes(searchText.toLocaleLowerCase()) : true;
                const checkSelectedCategory = selectCategory !== "" ? 
                    prod.category === selectCategory : true;

                return checkProductName && checkSelectedCategory;
            })

            state.filteredProducts = filtered;
        })
        .addCase(ProductAction.Reset, (state, action) => {
            state.searchText = "",
                state.filteredProducts = state.products;
            state.selectCategory = ""
        })
        .addCase(ProductAction.SetCategory, (state, action) => {
            state.selectCategory = Number(action.payload);
        })
        .addCase(ProductAction.SetSearchText, (state, action) => {
            state.searchText = action.payload;
        })
        .addCase(ProductAction.SetFilteredCount, (state, action) => {
            state.filteredCount = action.payload;
        })
        .addCase(ProductAction.AddProduct, (state, action) => {
            state.products = [...state.products, action.payload];
        })

})

export default productReducer;