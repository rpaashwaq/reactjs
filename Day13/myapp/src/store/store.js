import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/product.reducer";
import categoryReducer from "../reducers/category.reducer";

const store = configureStore({
    reducer: {
        productReducer,
        categoryReducer
    }
})

export default store;