import { useSelector } from "react-redux";
import { ProductAction } from "../actions/product.actions";
import { categoryList } from "../data/data";
import store from "../store/store";
import ProductListRedux from "./ProductListRedux";
import { useEffect, useState } from "react";
import { CategoryAction } from "../actions/category.actions";


function SearchRedux() {

    const categories = useSelector(state=>state.categoryReducer.filteredCategories);
    const [totalRecords, setTotalRecords] = useState(0);

    useEffect(()=>{
        store.dispatch(CategoryAction.FetchCategories());
    },[]);


    const handleCategoryChange = (e) => {
        store.dispatch(ProductAction.SetCategory(e.target.value));
    }

    const handleTextChange = (e) => {
        store.dispatch(ProductAction.SetSearchText(e.target.value));
    }

    const onUpdateCount = (count) => {
        setTotalRecords(count);
    }

    const handleSearchClick = () => {
        store.dispatch(ProductAction.FilterProduct());

        console.log(store.getState());
    }

    const handleResetClick = () => {
        store.dispatch(ProductAction.Reset());
    }

    const handleAddProductClick = () => {
        let newProduct ={productId: (Math.random().toFixed(0)*2), productName: "New Product", price: 70000, productCode:"P001", category: 1};
        store.dispatch(ProductAction.AddProduct(newProduct));
    }

    return (<>

        <div className="row">
            <div className="col-lg-6">
                <h4>Search Product</h4>
                <div className="form-group">
                    <label>Select Category:</label>
                    <select onChange={(e) => handleCategoryChange(e)} className="form-select">
                        <option value="">--Select--</option>
                        {categories.map((cat, index) => (
                            <option key={cat.id} value={cat.id}>{cat.categoryName}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Search Text:</label>
                    <input type="text" onChange={(e) => handleTextChange(e)} className="form-control" />
                </div>
                <input type="button" className="btn btn-primary" value="Search" onClick={(e)=>handleSearchClick(e)}/>
                <input type="button" className="btn btn-dark" value="Reset" onClick={(e)=>handleResetClick(e)}/>
                <input type="button" className="btn btn-warning" value="Add Product" onClick={(e)=>handleAddProductClick(e)}/>

                
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-sm-6">
                <ProductListRedux 
                    onNotify={(event) => onUpdateCount(event)} />

                {totalRecords > 0 && (<div className="text-success">Total Records: {totalRecords}</div>)}
            </div>
        </div>



    </>)
}

export default SearchRedux;