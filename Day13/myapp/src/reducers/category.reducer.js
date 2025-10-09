import { createReducer } from "@reduxjs/toolkit"
import { CategoryAction } from "../actions/category.actions"
import { categoryList } from "../data/data"

const initialState = {
    categoryList: [...categoryList],
    newRecordAdded: false,
    filteredCategories: []
}


const categoryReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(CategoryAction.FetchCategories, (state, action) => {
        state.filteredCategories = state.categoryList;
    })

})

export default categoryReducer;