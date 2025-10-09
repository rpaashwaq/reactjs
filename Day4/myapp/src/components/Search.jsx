import { useState } from "react";
import { categoryList } from "../data/data"
import ProductList from "./ProductList";


function Search() {

    const categories = categoryList;
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (e) => {
        setSelectedCategory(prev => e.target.value);
    }

    return (<>

        <h4>Search Product</h4>
        Filter:
        <select onChange={(e) => handleCategoryChange(e)}>
            <option value="">--Select--</option>
            {categories.map((cat, index) => (
                <option key={cat.id} value={cat.id}>{cat.categoryName}</option>
            ))}
        </select>

        <i>{selectedCategory}</i>

        <hr />

        <ProductList />

    </>)
}

export default Search;