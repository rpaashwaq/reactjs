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

        <div className="row">
            <div className="col-lg-6">
                <h4>Search Product</h4>
                <label>Filter:</label>
                <select onChange={(e) => handleCategoryChange(e)} className="form-select">
                    <option value="">--Select--</option>
                    {categories.map((cat, index) => (
                        <option key={cat.id} value={cat.id}>{cat.categoryName}</option>
                    ))}
                </select>

                <i>{selectedCategory}</i>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-sm-6">
                <ProductList selectedCat={selectedCategory} myname="pradeep" />
            </div>
        </div>



    </>)
}

export default Search;