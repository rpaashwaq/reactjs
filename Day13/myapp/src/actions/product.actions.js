import { createAction } from "@reduxjs/toolkit";


export const ProductAction = {
    FilterProduct:  createAction("product/FILTERPRODUCT"),
    SetCategory: createAction("product/setCategory"),
    SetSearchText: createAction("product/setSearchText"),
    Reset: createAction("product/Reset"),
    SetFilteredCount: createAction("product/SetFilteredCount"),
    AddProduct: createAction("product/AddProduct")
}
