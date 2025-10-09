import { createReducer } from "@reduxjs/toolkit"
import { CHECKNEWCATEGORYADDED, FILTERCATEGORY } from "../actions/category.actions"
import { categoryList } from "../data/data"

const initialState = {
    categoryList: [...categoryList],
    newRecordAdded: false
}


const categoryReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(FILTERCATEGORY, (state, action) => {
       
    })
    .addCase(CHECKNEWCATEGORYADDED, (state, action) => {

    })
})

export default categoryReducer;